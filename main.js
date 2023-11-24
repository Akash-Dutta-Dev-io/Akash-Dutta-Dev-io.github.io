// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
}))