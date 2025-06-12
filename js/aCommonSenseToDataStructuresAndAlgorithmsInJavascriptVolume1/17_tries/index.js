class TrieNode {
  constructor() {
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  search(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        return null;
      }
    }
    return currentNode;
  }
  insert(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
      } else {
        const newNode = new TrieNode();
        currentNode.children[char] = newNode;
        currentNode = newNode;
      }
    }
    currentNode.children['*'] = null;
  }
  collectAllWords(words, node = null, word = '') {
    const currentNode = node || this.root;
    for (const [key, childNode] of Object.entries(currentNode.children)) {
      if (key === '*') {
        words.push(word);
      } else {
        this.collectAllWords(words, childNode, word + key);
      }
    }
    return words;
  }
  autocomplete(prefix) {
    const currentNode = this.search(prefix);
    if (!currentNode) {
      return null;
    }
    return this.collectAllWords([], currentNode);
  }
  // Write a function that traverse each node of a trie and prints each key, including all * keys
  printAllKeys(currentNode = this.root) {
    for (const [key, childNode] of Object.entries(currentNode.children)) {
      console.log(key);
      if (childNode) {
        this.printAllKeys(childNode);
      }
    }
  }
  // we want to write a function which attempts to auto correct users typo with a correct word
  /* this function should accept a string that represents the user input.
        if user string is not in the trie
            the function should return a word which shares the longest prefix with user string

    if(all the char of the words are in the trie ){
        it should return the word}
    else
        it should return the word in trie

        for this function we will use the search algorithm and we will return the first word which has the longest prefix with user string
 */
  autoCorrect(word, correctedWord = '') {
    let currentNode = this.root;
    let isTypo = false;

    for (const char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char];
        correctedWord += char;
      } else {
        isTypo = true;
        break;
      }
    }
    if (isTypo) {
      for (const [key, childNode] of Object.entries(currentNode.children)) {
        if (key === '*') {
          return correctedWord;
        } else {
          correctedWord += key;
          currentNode = currentNode.children;
        }
      }
    }

    return correctedWord;
  }
}
let trie1 = new Trie();
trie1.insert('at');
trie1.insert('catnap');
trie1.insert('cat');
trie1.insert('catnip');

trie1.printAllKeys();

console.log(trie1.autoCorrect('cat'));
