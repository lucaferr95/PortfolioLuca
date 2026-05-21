// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  window.scrollY > 50
    ? (navbar.style.backgroundColor = "rgba(10, 10, 10, 0.98)")
    : (navbar.style.backgroundColor = "rgba(10, 10, 10, 0.95)");
});

// Gestione Hamburger Menu Mobile con classi di stile
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerIcon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  // Controlla se il menu è aperto o chiuso
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
    hamburgerIcon.className = "fas fa-bars"; // Torna alle 3 linee
  } else {
    mobileMenu.style.display = "flex";
    hamburgerIcon.className = "fas fa-times"; // Diventa una "X" di chiusura
  }
});

// Chiude il menu quando clicchi su un link qualsiasi del menu mobile
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    hamburgerIcon.className = "fas fa-bars";
  });
});
