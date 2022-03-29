const inputFields = document.querySelectorAll("input");
const submitForm = document.querySelector("button")


const validateForm = () => {
  inputFields.forEach((inputField) => {
    if(inputField.value == "")
        alert("error")
  });
};


submitForm.addEventListener("click",validateForm)