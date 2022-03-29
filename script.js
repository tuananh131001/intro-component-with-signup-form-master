const inputFields = document.querySelectorAll("input");
const submitForm = document.querySelector("button");
const errorNotis = document.querySelectorAll(".form_error");

const validateForm = () => {
  errorNotis.forEach((errorNoti) => errorNoti.style.display = "block");
};

submitForm.addEventListener("click", validateForm);
