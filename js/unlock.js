// TODO: change this code, then share it only with people who should have access
// (paying customers, your own students, etc.) - anyone with this code can unlock
// the full lesson library. This is a simple shared-code gate, not a real login
// system: it does not hide the lesson text from someone reading the page source.
const ACCESS_CODE = "VICTOR2026";
const STORAGE_KEY = "lwv_unlocked";

const gate = document.querySelector("#lockGate");
const course = document.querySelector("#fullCourse");
const form = document.querySelector("#unlockForm");
const errorEl = document.querySelector("#unlockError");

function unlock() {
  if (gate) gate.hidden = true;
  if (course) {
    course.hidden = false;
    // these cards were hidden when animations.js set up its scroll observer,
    // so reveal them directly instead of relying on IntersectionObserver
    // re-triggering on a display change
    course.querySelectorAll(".reveal").forEach((el) => el.classList.add("active"));
  }
}

if (gate && course) {
  if (localStorage.getItem(STORAGE_KEY) === "true") {
    unlock();
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = document.querySelector("#accessCodeInput").value.trim();
      if (value.toLowerCase() === ACCESS_CODE.toLowerCase()) {
        localStorage.setItem(STORAGE_KEY, "true");
        if (errorEl) errorEl.hidden = true;
        unlock();
      } else if (errorEl) {
        errorEl.hidden = false;
      }
    });
  }
}
