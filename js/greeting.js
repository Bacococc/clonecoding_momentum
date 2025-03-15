const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
// const ButtonClicked = "clicked"

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName)
    console.log(loginForm)
    greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings(userName)
}

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}!`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings(savedUserName);
}
