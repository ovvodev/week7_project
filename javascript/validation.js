
const form = document.getElementById("form");
const userName = document.getElementById("name");
const labelName = document.getElementById("label-name");
const userMail = document.getElementById("mail");
const msgText = document.getElementById("msg");
const labelMail = document.getElementById("label-mail");
const labelMsg = document.getElementById("label-message");
const requiredLabel = document.getElementById("required-label");


const submitBut = document.getElementById("submit-button");



const validate = (e) => {
    e.preventDefault();
    if (userName.value === ""){
        userName.placeholder = "Please enter your full name"
        userName.classList.add("error");
        userName.classList.add("error-label");
        labelName.classList.add("error-label");
        requiredLabel.classList.add("error-label");
        return;
    }
    if (userMail.value === ""){
        userMail.placeholder = "Please enter your email address.";
        userMail.classList.add("error");
        userMail.classList.add("error-label");
        labelMail.classList.add("error-label");
        requiredLabel.classList.add("error-label");
        return;
    }
    if (!emailIsValid(userMail.value)) {
        userMail.placeholder = "Please enter a valid email address.";
        userMail.value = "";
        userMail.classList.add("error");
        userMail.classList.add("error-label");
        labelMail.classList.add("error-label");
        requiredLabel.classList.add("error-label");
        return;
      }
      
      if (msgText.value.length <= 0){
        msgText.placeholder = "Please message cannot be empty...";
        msgText.classList.add("error");
        msgText.classList.add("error-label");
        labelMsg.classList.add("error-label");
        requiredLabel.classList.add("error-label");
        return;
      }

    form.submit();
    form.reset();
};

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  
  
  const hideError = () => {
    userMail.placeholder = "Enter your email address";
    userName.placeholder = "Enter your full name";
    msgText.placeholder = "Write your message here..."
    userMail.classList.remove("error");
    userMail.classList.remove("error-label");
    labelMail.classList.remove("error-label");
    userName.classList.remove("error");
    userName.classList.remove("error-label");
    labelName.classList.remove("error-label");
    msgText.classList.remove("error");
    msgText.classList.remove("error-label");
    labelMsg.classList.remove("error-label");
    requiredLabel.classList.remove("error-label");
  };

form.addEventListener("submit", validate);
document.addEventListener("click", hideError);