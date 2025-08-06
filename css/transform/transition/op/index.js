// function change() {
//   const elements = document.querySelectorAll('div.box');
//   // elements.forEach((element) => {
//   //   element.classList.toggle('transformed-state');
//   // });
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].classList.toggle('transformed-state');
//   }
// }
// const changeButton = document.querySelector('#change');
// changeButton.addEventListener('click', change);

// function updateTransition() {
//   const els = document.querySelectorAll(
//     '.transition-timing-function-container > div'
//   );
//   els.forEach((el) => {
//     el.classList.toggle('box1');
//   });
// }

// const intervalID = setInterval(updateTransition, 10000);

// const divElem = document.querySelector('.display-none');
// const displayTransitionDiv = document.querySelector(':root');

// displayTransitionDiv.addEventListener('click', showHide);
// document.addEventListener('keydown', showHide);

// function showHide() {
//   console.log(divElem);
//   divElem.classList.toggle('showing');
//   console.log('Hello');
// }

const foo = document.getElementById('foo');
document.addEventListener(
  'click',
  (ev) => {
    foo.style.transform = `translateY(${ev.clientY - 25}px)`;
    foo.style.transform += `translateX(${ev.clientX - 25}px)`;
  },
  false
);
