async function post(request) {
  try {
    const response = await fetch(request);
    const result = response.json();
    console.log('result: ', result);
  } catch {
    console.log(error);
  }
}

const request1 = new Request('url', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username: 'example1' }),
});

const request2 = new Request(request1, {
  body: JSON.stringify({ username: 'example2' }),
});

post(request1);
post(request2);

// To make a request cancelable, create an AbortController, and assign its AbortSignal to the request's signal property.

// To cancel the request, call the controller's abort() method. The fetch() call will reject the promise with an AbortError exception.

const controller = new AbortController();
const fetchButton = document.querySelector('#fetch');

fetchButton.addEventListener('click', async () => {
  try {
    console.log('starting fetch');
    const response = await fetch('url', {
      signal: controller.signal,
    });
    console.log(response.status);
  } catch (e) {
    console.log(e);
  }
});

const cancelButton = document.querySelector('#cancel');

cancelButton.addEventListener('click', () => {
  controller.abort();
});

// Reading the response body
// The Response interface provides a number of methods to retrieve the entire body contents in a variety of different formats:

// Response.arrayBuffer()
// Response.blob()
// Response.formData()
// Response.json()
// Response.text()
// These are all asynchronous methods, returning a Promise which will be fulfilled with the body content.

// In this example, we fetch an image and read it as a Blob, which we can then use to create an object URL:

const image = document.querySelector('img');
const url = 'flowers.jpg';
async function setImage() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  } catch (e) {
    console.error(e);
  }
}

// Streaming the response body
// Request and response bodies are actually ReadableStream objects, and whenever you read them, you're streaming the content. This is good for memory efficiency, because the browser doesn't have to buffer the entire response in memory before the caller retrieves it using a method like json().

// This also means that the caller can process the content incrementally as it is received.

// For example, consider a GET request that fetches a large text file and processes it in some way, or displays it to the user:

const url1 = 'https://www.example.org/a-large-file.txt';
async function fetchText(url1) {
  try {
    const response = await fetch(url1);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.log(error);
  }
}

// If we use Response.text(), as above, we must wait until the whole file has been received before we can process any of it.

// If we stream the response instead, we can process chunks of the body as they are received from the network:

const url2 = 'https://www.example.org/a-large-file.txt';

async function fetchTextAsStream(url2) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const stream = response.body.pipeThrough(new TextDecoderStream());
    for await (const value of stream) {
      console.log(value);
    }
  } catch (error) {
    console.log(error);
  }
}
