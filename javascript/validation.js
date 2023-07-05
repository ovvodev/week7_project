
const form = document.getElementById("form");
const userName = document.getElementById("name");
const userMail = document.getElementById("mail");
const userPhone = document.getElementById("phone");
const submitBut = document.getElementById("submit-button");

const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");

const validate = (e) => {
    e.preventDefault();
    if (userName.value === ""){
        showOverlay("Please enter your full name");
        userName.focus();
        return;
    }
    if (userMail.value === ""){
        showOverlay("Please enter your email address.");
        userMail.focus();
        return;
    }
    if (!emailIsValid(userMail.value)) {
        showOverlay("Please enter a valid email address.");
        userMail.focus();
        return;
      }

    form.submit();
    form.reset();
}

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  const showOverlay = (message) => {
    overlayContent.textContent = message;
    overlay.style.display = "block";
  };
  
  const hideOverlay = () => {
    overlay.style.display = "none";
  };

form.addEventListener("submit", validate);
overlay.addEventListener("click", hideOverlay);