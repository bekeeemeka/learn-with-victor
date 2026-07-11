// TODO: get a free access key at https://web3forms.com (just needs your email, no account signup)
const WEB3FORMS_ACCESS_KEY = "YOUR-ACCESS-KEY-HERE";

const contactForm = document.querySelector("#contactForm");

function showContactStatus(message, type) {
  let statusEl = document.querySelector("#contactStatus");
  if (!statusEl) {
    statusEl = document.createElement("p");
    statusEl.id = "contactStatus";
    contactForm.appendChild(statusEl);
  }
  statusEl.textContent = message;
  statusEl.className = "contact-status " + type;
}

if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitBtn = contactForm.querySelector("button[type=submit]");
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New English Lesson Booking Request");
    formData.append("name", document.querySelector("#contactName").value.trim());
    formData.append("email", document.querySelector("#contactEmail").value.trim());
    formData.append("English Level", document.querySelector("#contactLevel").value);
    formData.append("message", document.querySelector("#contactMessage").value.trim());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        contactForm.reset();
        showContactStatus("Thank you! Your message has been sent - I'll reply personally soon.", "success");
      } else {
        showContactStatus("Something went wrong. Please message me on WhatsApp instead.", "error");
      }
    } catch (err) {
      showContactStatus("Could not send your message. Please try WhatsApp instead.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}
