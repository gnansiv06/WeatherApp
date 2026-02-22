async function getWeather() {

    const city = document.getElementById("city").value;
    const apiKey = "5d7449ff7b2e2c83d5595ba622c7de80";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if(response.ok){

        document.getElementById("temperature").innerText = data.main.temp + "°C";
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("condition").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = data.main.humidity + "%";
        document.getElementById("wind").innerText = data.wind.speed + " km/h";
        document.getElementById("pressure").innerText = data.main.pressure + " hPa";

        const iconCode = data.weather[0].icon;
        document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        const weather = data.weather[0].main.toLowerCase();

        if(weather.includes("clear")){
            document.body.style.background =
            "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9') no-repeat center/cover";
        }
        else if(weather.includes("cloud")){
            document.body.style.background =
            "url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63') no-repeat center/cover";
        }
        else if(weather.includes("rain")){
            document.body.style.background =
            "url('https://images.unsplash.com/photo-1501696461445-0e2e6bfa9a1d') no-repeat center/cover";
        }
    }
}

document.getElementById("city").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        getWeather();
    }
});