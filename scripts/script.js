const hamburger = document.querySelector(".hamburger");
const spans = document.querySelectorAll(".hamburger span");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
  spans.forEach((index) => {
    index.classList.toggle("active");
  });
  navbar.classList.toggle("active");
});
