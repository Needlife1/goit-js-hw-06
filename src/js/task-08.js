const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  if (
    loginForm.children[0].firstElementChild.value.length === 0 ||
    loginForm.children[1].firstElementChild.value.length === 0
  ) {
    alert("Все поля должни быть заполнены !!!");
  } else {
    const user = {
      email: loginForm.children[0].firstElementChild.value,
      password: loginForm.children[1].firstElementChild.value,
    };
    console.log(user);
    loginForm.reset();
  }
}
