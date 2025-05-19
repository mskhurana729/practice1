function hash(name) {
  return name.charAt(0);
}

function hash1(name, surname) {
  return name.charAt(0) + surname.charAt(0);
}

function stringToNumber(string) {
  let hashCode = 0;
  for (let i = 0; i < string.length; i++) {
    hashCode += string.charCodeAt(i);
  }
  return hashCode;
}

function hash2(name, surname) {
  return stringToNumber(name) + stringToNumber(surname);
}

function stringToNumber1(string) {
  let hashCode = 0;
  const primeNumber = 31;
  for (let i = 0; i < string.length; i++) {
    hashCode = primeNumber * hashCode + string.charCodeAt(i);
  }
  return hashCode;
}
//////////////////////////////////////////////////////
