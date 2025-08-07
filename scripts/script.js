const hamburger = document.querySelector(".hamburger");
const spans = document.querySelectorAll(".hamburger span");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
  spans.forEach((index) => {
    index.classList.toggle("active");
  });
  navbar.classList.toggle("active");
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    // If it's an internal anchor link
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    
    // If it's an external link (no "#" at start)
    else if (href && !href.startsWith('#')) {
      e.preventDefault(); // block default so we control the action
      window.open(href, '_blank');
    }
  });
});
