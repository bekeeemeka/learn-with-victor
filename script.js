const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (nav) {
            nav.classList.remove("active");
        });

        link.classList.add("active");
    });
});

const audioPlayers = document.querySelectorAll("audio");

audioPlayers.forEach(function (audio) {
    audio.addEventListener("play", function () {
        audioPlayers.forEach(function (otherAudio) {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
    });
});