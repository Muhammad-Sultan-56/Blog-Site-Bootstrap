const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.querySelector(".menu-close");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Auto-hide on larger screens
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.remove("active");
  }
});
