// TODO: replace with your real Calendly link once created (Calendly > Event Types > Copy Link)
const CALENDLY_URL = "https://calendly.com/YOUR-LINK-HERE";

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
