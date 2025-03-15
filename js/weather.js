const WEATHER_API_KEY = '86c4eb8ee97b2377daf356749204ccb2'

function onGeoOk(position){
    let lat = position.coords.latitude; //위도
    let lng = position.coords.longitude; //경도
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`;
    function fetchWeather() {
        fetch(url)
            .then(response => response.json())
            .then(data=> {
                const city = document.querySelector("#weather span:first-child");
                const weather = document.querySelector("#weather span:last-child");
                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp} C`;
            });
    } fetchWeather();
    setInterval(fetchWeather, 600000); // 10분마다 날씨 업데이트 (600000ms)
}

function onGeoError(){
    alert("Can't get your location to load the weather.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //현재 위치 반환
