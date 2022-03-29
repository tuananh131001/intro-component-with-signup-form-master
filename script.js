const inputFields = document.querySelectorAll("input");
const submitForm = document.querySelector(".form-container");
const errorNotis = document.querySelectorAll(".form_error");
const email = document.querySelector(".email");
function formValidation(event) {
  for (let i = 0; i < 4; i++) {
    inputFields[i].classList.remove("error-icon");
    errorNotis[i].style.display = "none";

    if (!email.validity.valid) {
      errorNotis[2].style.display = "block";
      email.classList.add("error-icon");
      event.preventDefault();
    }
    if (
      (inputFields.type != "email" || inputFields.type != "submit") &&
      inputFields[i].value == ""
    ) {
      errorNotis[i].style.display = "block";
      inputFields[i].classList.add("error-icon");
      event.preventDefault();
    }
  }
}

submitForm.addEventListener("submit", formValidation);
