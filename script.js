const btn = document.querySelector("#submitBtn");
const email = document.querySelector("#emailAdd");
const errorImg = document.querySelector("#error");
const errorMsg = document.querySelector("#errorMsg");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

let emailValue = "";
email.addEventListener("input", () => {
  emailValue = email.value.trim();
});

btn.addEventListener("click", () => {
  if (!emailRegex.test(emailValue)) {
    errorImg.style.display = "inline";
    errorMsg.style.display = "inline";
  }else{
     errorImg.style.display = "none";
    errorMsg.style.display = "none";
    email.value = "";
  }
});
