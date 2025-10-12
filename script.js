// ===== TYPING EFFECT =====
const typingText = document.getElementById("typing-text");
const text = "Building innovative solutions from machine to web";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 70);
  }
}
window.addEventListener("load", typeWriter);

// ===== MOBILE NAV TOGGLE =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
});

const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {
  const images = carousel.querySelector(".carousel-images");
  const imgCount = images.children.length;
  let index = 0;

  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

  function updateCarousel() {
    images.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % imgCount;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + imgCount) % imgCount;
    updateCarousel();
  });
});

// ===== DATE & TIME =====
function updateDateTime() {
  const now = new Date();
  const options = { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit" 
  };
  document.getElementById("date-time").textContent = now.toLocaleString("en-US", options);
}

setInterval(updateDateTime, 1000);
updateDateTime(); 



