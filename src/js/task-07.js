const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  textSpan: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", chengeTextFontSize);

function chengeTextFontSize(event) {
  refs.textSpan.style.fontSize = event.currentTarget.value + "px";
  console.log(event.currentTarget.value);
}
