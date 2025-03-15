function onGeoOk(position){
    let lat = position.coords.latitude; //위도
    let lag = position.coords.longitude; //경도
    console.log("You live in " + lat, lag);
}
function onGeoError(){
    alert("Can't get your location to load the weather.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //현재 위치 반환