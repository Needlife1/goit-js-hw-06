const refs = {
  inputName: document.querySelector("#name-input"),
  autputText: document.querySelector("#name-output"),
};

refs.inputName.addEventListener("input", outputsValue);

function outputsValue(event) {
  //   event.currentTarget.value === ""
  //     ? (refs.autputText.textContent = "Anonymous")
  //     : (refs.autputText.textContent = event.currentTarget.value);

  refs.autputText.textContent = event.currentTarget.value || "Anonymous";
}
