const CALENDLY_URL = "https://calendly.com/bekeeemeka/30min";

document.querySelectorAll(".btn-calendly").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener");
    }
  });
});
