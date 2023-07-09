const inputValidation = document.querySelector("#validation-input");

inputValidation.addEventListener("blur", validationLengthValue);

function validationLengthValue(event) {
  if (
    Number(inputValidation.dataset.length) < event.currentTarget.value.length
  ) {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
  } else if (
    Number(inputValidation.dataset.length) >= event.currentTarget.value.length
  ) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  }
}
