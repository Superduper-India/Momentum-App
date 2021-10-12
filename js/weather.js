const API_KEY = "3fe5af50acd96e82eba3c3ba6156edab";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metrics`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector(".weather span:first-child");
            weather.innerText = data.weather[0].main;

            const city = document.querySelector(".weather span:last-child");
            city.innerText = data.name;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

