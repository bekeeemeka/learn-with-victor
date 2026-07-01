const menuToggle = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");
const audios = document.querySelectorAll("audio");
const header = document.querySelector(".site-header");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
  });
}

audios.forEach(audio => {
  audio.addEventListener("play", () => {
    audios.forEach(otherAudio => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
const revealElements = document.querySelectorAll(
  ".info-card, .lesson-card, .review-card, .faq-item, .cta, .about-grid"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

window.addEventListener("scroll", () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 100) {
      element.classList.add("active");
    }
  });
});