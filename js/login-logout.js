const loginForm = document.querySelector(".login-form")
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greetings");
const logoutForm = document.querySelector(".logout-form");

const SAVED_USERNAME = "Saved Username";
const HIDDEN_CLASSNAME = "hidden";

// 유저이름이 localStorage에 저장되어 있지 않을경우, step2 //
function submitUsername(event) {
    event.preventDefault();
    const inputUsername = loginInput.value;
    localStorage.setItem(SAVED_USERNAME, inputUsername);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Welcome, ${inputUsername}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(SAVED_USERNAME);

// 유저이름이 localStorage에 저장되어 있지 않을경우, step1 //
if (savedUsername === null) {
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitUsername);

    // 유저이름이 localStorage에 저장되어 있을경우, //
} else {
    greeting.innerText = `Welcome, ${savedUsername}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}