// the toggle button
const toggle = document.getElementById("toggle");
// for the close button
const close = document.getElementById("close");
// for the open
const open = document.getElementById("open");
// for the modal
const modal = document.getElementById("modal");

// => this is called an arrow function

// for the toggle navigation
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
); // now to and style the show-nav in the css line 16

// show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal")); //now go to the css and start styling the modal-show

//Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
