function hash(input) {
  return 0;
}

// bad hash function
function hash(input) {
  let hash = 0;
  for (let c of input) {
    hash += c.charCodeAt(0);
  }
  return hash % 1000000;
}

// a map is a data structure that allows you to store key-value pairs.

let map1 = new Map();
map1.set('hello', 'World');
console.log(map1.get('hello'));

// find anagrams using map

let words = [
  'antlers',
  'rentals',
  'sternal',
  'article',
  'recital',
  'flamboyant',
];

let map = new Map();
for (let word of words) {
  let key = word.split('').sort().join('');
  if (!map.has(key)) {
    map.set(key, []);
  }
  map.get(key).push(word);
}
