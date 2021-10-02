const clock = document.querySelector(".clock");

function mainClock() {
    const hours = String(new Date().getHours()).padStart(2, "0");
    const minutes = String(new Date().getMinutes()).padStart(2, "0");
    const seconds = String(new Date().getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

mainClock();
setInterval(mainClock, 1000);