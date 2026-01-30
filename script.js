console.log("JavaScript Connected Successfully ✅");

const body = document.body;
const darkBtn = document.getElementById("darkModeBtn");
const form = document.getElementById("contactForm");
const email = document.getElementById("email");
const message = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

darkBtn.addEventListener("click", toggleDarkMode);
form.addEventListener("submit", validateForm);
email.addEventListener("input", validateFormLive);
message.addEventListener("input", validateFormLive);


function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
}

window.onload = function () {
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
  }
};

function validateForm(e) {
  e.preventDefault();

  if (!email.value.includes("@")) {
    showError("Invalid email");
    return;
  }

  if (message.value.length < 10) {
    showError("Message  is too short");
    return;
  }

  showSuccess("Message sent Sucessfully!");
  form.reset();
}
function validateFormLive() {
  if (!email.value.includes("@")) {
    showError("Email must contain @");
    return;
  }

  if (message.value.length < 10) {
    showError("Message must be at least 10 characters");
    return;
  }

  showSuccess("Looks good 👍");
}


function showError(msg) {
  formMessage.textContent = msg;
  formMessage.style.color = "red";
}

function showSuccess(msg) {
  formMessage.textContent = msg;
  formMessage.style.color = "green";
}
