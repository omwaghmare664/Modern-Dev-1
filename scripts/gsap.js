gsap.registerPlugin(ScrollTrigger);

// Text reveal animation for headings
gsap.from(".portfolio h2, .portfolio h1, .portfolio h3", {
  yPercent: 100, // Move text up from below
  clipPath: "inset(0 0 100% 0)", // Animate with a reveal effect
  opacity: 0, // Start fully transparent
  duration: 1.5, // Control the speed of animation
  stagger: 0.2, // Delay between each heading animation
  ease: "power4.out", // Use a smooth easing function for pro-level feel
  scrollTrigger: {
    trigger: "#home",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
});

// Animate the paragraph with staggered fade-in
gsap.from(".portfolio p", {
  y: 30, // Move slightly up
  opacity: 0, // Start fully transparent
  duration: 1,
  delay: 0.5, // Start after the heading animation
  stagger: 0.1, // Stagger for each paragraph line
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#home",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
});

// Image slide-in and scale-up animation
gsap.from(".portfolio_img", {
  xPercent: -50, // Slide in from the left
  scale: 0.8, // Start with a smaller scale
  opacity: 0, // Start fully transparent
  duration: 1.5,
  ease: "power4.out", // Strong easing for a modern look
  scrollTrigger: {
    trigger: "#home",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
});
// Navbar animation for desktop only
if (window.innerWidth > 600) {
  // Only apply to desktop view
  gsap.from(".navbar", {
    y: -100, // Slide down from 100px above
    opacity: 0, // Start fully transparent
    duration: 1, // Duration of the animation
    ease: "power3.out", // Smooth easing for a professional feel
    delay: 0.5, // Delay for a sleek entrance
  });

  gsap.from(".navbar .links li", {
    y: 20, // Move links upwards
    opacity: 0, // Start fully transparent
    delay: 1,
    duration: 0.6, // Duration of the animation
    ease: "power2.out", // Smooth easing
    stagger: 0.1, // Delay between each link's animation
  });
}

gsap.from(".section_header h1", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section_header",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

// Animate the entire about display
gsap.from(".about_display", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about_display",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Animate each about section
const aboutSections = document.querySelectorAll(".about-section");
const projectCards = document.querySelectorAll(".project-card");

aboutSections.forEach((section, index) => {
  gsap.from(section, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay: index * 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

projectCards.forEach((card, index) => {
  gsap.from(card, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay: index * 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

// Contact Section Animation
gsap.from("#contact .section-title", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from("#contact .section-subtitle", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#contact",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
});

// Contact items animation with stagger
gsap.from("#contact .contact-item", {
  opacity: 0,
  x: -30,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".contact-container",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
});

// Contact Form Animation
gsap.from(".contact-form .form-group", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".submit-btn", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// Animate footer sections when they come into view
gsap.from(".footer-section", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,
});

// Social media icon hover animation
document.querySelectorAll(".social-icons a").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, {
      scale: 1.2,
      rotate: 15,
      duration: 0.3,
      ease: "back.out(2)",
    });
  });

  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Quick Links hover effect
document.querySelectorAll(".footer-section ul li a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      color: "#c643faed", // Primary hover color
      duration: 0.3,
      ease: "power2.out",
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      color: "#fff", // Default color
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
