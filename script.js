const menuToggle = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");
const audios = document.querySelectorAll("audio");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

audios.forEach(audio => {
  audio.addEventListener("play", () => {
    audios.forEach(otherAudio => {
      if (otherAudio !== audio) otherAudio.pause();
    });
  });
});
window.addEventListener("scroll", function () {
    const header = document.querySelector(".site-header");

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});