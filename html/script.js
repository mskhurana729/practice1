// const dialog = document.querySelector("dialog");
// const showButton = document.querySelector("dialog + button");
// const closeButton = document.querySelector("dialog button");

// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });
// closeButton.addEventListener("click", () => {
//   dialog.close();
// });

// const showButton = document.getElementById("showDialog");
// const favDialog = document.getElementById("favDialog");
// const outputBox = document.querySelector("output");
// const selectEl = favDialog.querySelector("select");
// const confirmBtn = favDialog.querySelector("#confirmBtn");

// showButton.addEventListener("click", () => {
//   favDialog.showModal();
// });

// favDialog.addEventListener("close", (e) => {
//   outputBox.value =
//     favDialog.returnValue === "default"
//       ? "No return value"
//       : `ReturnValue: ${favDialog.returnValue}`;
// });
// confirmBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   favDialog.close(selectEl.value);
// });

// const showBtn = document.getElementById("show-dialog");
// const dialog = document.getElementById("dialog");
// const jsCloseBtn = dialog.querySelector("#js-close");

// showBtn.addEventListener("click", () => {
//   dialog.showModal();
// });
// jsCloseBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   dialog.close();
// });

const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");
showBtn.addEventListener("click", (e) => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
