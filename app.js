const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
// const ButtonClicked = "clicked"

function handleLoginClick() {
    const userName = loginInput.value;
    if (userName === "") {
        alert("Please write right user name"); }
    // } else if (userName === userName.length() > 20 ) {
    //     alert("Please write user name under 20 letters!")
    // }
}

loginButton.addEventListener("click", handleLoginClick);