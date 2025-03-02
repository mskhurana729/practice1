const img = document.querySelector('img');
const loadNewImageButton = document.querySelector('.loadNewImage');
const searchBox = document.querySelector('.searchBox');
let defaultKey = 'cars';

async function fetchNewImage(key = defaultKey) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=YEWLWoYZW3xakGDkT2dnMoiOXTFEzNzv&s=${key}`,
      { mode: 'cors' }
    );

    if (response.ok) {
      throw new Error(response.status);
    }
    const keyData = await response.json();

    img.src = keyData.data.images.original.url;
  } catch (e) {
    console.log(e);
    img.setAttribute('alt', `sorry no images with ${key}`);
  }
}
loadNewImageButton.addEventListener('click', () => {
  let key = searchBox.value;
  fetchNewImage(key);
  // previousKey = searchBox.value || previousKey;
});

// await accepts “thenables”
// Like promise.then, await allows us to use thenable objects (those with a callable then method). The idea is that a third-party object may not be a promise, but promise-compatible: if it supports .then, that’s enough to use it with await.

// Here’s a demo Thenable class; the await below accepts its instances:

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve);

    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

async function f() {
  let result = await new Thenable(1);
  console.log(result);
}
