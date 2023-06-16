const button = document.getElementById("newsletter-form");
const emailInput = document.getElementById("user-email-id");
const errorText = document.getElementById("error-text");
const thankYou = document.querySelector(".thankyou");
const subscriptionPage = document.querySelector(".subscription");
const emailElement = document.querySelector(".email");
const dismissButton = document.getElementById("dismiss-button");

button.addEventListener("submit", (event) => {
  event.preventDefault();
  const submitedEmail = event.target[0].value;
  const check = submitedEmail.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
  if (!check) {
    emailInput.classList.add("error");
    emailInput.classList.add("error-animation");
    errorText.innerText = "Valid email is required";
    setTimeout(() => {
      emailInput.classList.remove("error-animation");
    }, 1000);
  } else {
    subscriptionPage.style.display = "none";
    thankYou.style.display = "block";
    emailElement.innerText = submitedEmail;
  }
});

emailInput.addEventListener("keypress", () => {
  errorText.innerText = "";
  emailInput.classList.remove("error");
});

console.log(submitedEmail);
dismissButton.addEventListener("click", () => {
  location.replace(
    "https://keshavkumarhembram.github.io/fm-newsletter-sign-up-with-success-message-main/"
  );
});
