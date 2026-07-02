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
const counters = document.querySelectorAll(".counter");

const startCounter = function (counter) {
  const target = Number(counter.getAttribute("data-target"));
  let count = 0;
  const speed = Math.ceil(target / 80);

  const updateCounter = function () {
    if (count < target) {
      count += speed;
      counter.textContent = count > target ? target : count;
      setTimeout(updateCounter, 20);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
};

const counterObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
});

counters.forEach(function (counter) {
  counterObserver.observe(counter);
});
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#contactName").value;
    const email = document.querySelector("#contactEmail").value;
    const level = document.querySelector("#contactLevel").value;
    const message = document.querySelector("#contactMessage").value;

    const subject = "New English Lesson Booking Request";
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AEnglish Level: ${level}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:bekeeemeka33@gmail.com?subject=${subject}&body=${body}`;
  });
}