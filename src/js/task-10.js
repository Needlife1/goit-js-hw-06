function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  criateControler: document.querySelector("#controls"),
  boxForDiv: document.querySelector("#boxes"),
  numberInput: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
};

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", delitElement);

function createBoxes() {
  let number = refs.numberInput.value;
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    div.style.width = 30 + i * 10 + "px";
    div.style.height = 30 + i * 10 + "px";
    div.style.backgroundColor = getRandomHexColor();
    refs.boxForDiv.append(div);
  }
  refs.numberInput.value = "";
}

function delitElement() {
  if (refs.numberInput.value !== 0) {
    refs.boxForDiv.innerHTML = "";
  }
}
