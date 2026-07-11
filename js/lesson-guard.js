// Guards individual lesson pages: redirects back to the locked index
// if the visitor hasn't unlocked the course. Same soft-gate limitation
// as unlock.js - not real security, just keeps casual visitors out.
(function () {
  const STORAGE_KEY = "lwv_unlocked";
  if (localStorage.getItem(STORAGE_KEY) !== "true") {
    window.location.href = "../lessons.html#fullCourse";
  }
})();
