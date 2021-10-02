const loginForm = document.querySelector(".login-form")
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greetings");
const logoutBtn = document.querySelector(".logout-btn");

const SAVED_USERNAME = "Saved Username";
const HIDDEN_CLASSNAME = "hidden";

function submitUsername(event) {
    event.preventDefault();
    const inputUsername = loginInput.value;
    localStorage.setItem(SAVED_USERNAME, inputUsername);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Welcome, ${inputUsername}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(SAVED_USERNAME);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitUsername);
} else {
    greeting.innerText = `Welcome, ${savedUsername}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
