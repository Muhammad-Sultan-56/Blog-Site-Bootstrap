// aos js
AOS.init();

// function for responsive navbar
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

// function for running counter
document.addEventListener("DOMContentLoaded", function () {
  function startCounter(counterElement, targetValue) {
    let count = 0;
    let increment = Math.ceil(targetValue / 100); // Adjust speed
    let interval = setInterval(() => {
      count += increment;
      if (count >= targetValue) {
        counterElement.innerText = targetValue;
        clearInterval(interval);
      } else {
        counterElement.innerText = count;
      }
    }, 20); // Adjust interval speed
  }

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let counters = entry.target.querySelectorAll("h3:first-child");
        counters.forEach((counter) => {
          let targetValue = parseInt(counter.innerText, 10);
          counter.innerText = "0"; // Reset before starting animation
          startCounter(counter, targetValue);
        });
        observer.unobserve(entry.target); // Stop observing after animation runs once
      }
    });
  }

  let observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  let counterSection = document.querySelector(".row.p-3");
  if (counterSection) {
    observer.observe(counterSection);
  }
});
