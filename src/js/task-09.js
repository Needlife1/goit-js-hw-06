function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector("body"),
  colorText: document.querySelector(".color"),
  chengeColorBtn: document.querySelector(".change-color"),
};

refs.chengeColorBtn.addEventListener("click", chengeColorBody);

function chengeColorBody(ivent) {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  outputColor();
}

function outputColor() {
  refs.colorText.textContent = getRandomHexColor();
}
