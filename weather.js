const apikey = "71dad9c8194f433195464324240508";
const apiurl = "https://api.weatherapi.com/v1/forecast.json";
let city = "";
let days = 3;

// checkWeather();

function changeCity(value) {
  city = value;
  console.log(value);
}

async function checkWeather() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    apiurl + "?q=" + city + "&key=" + apikey + "&days=" + days,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));
      const data = JSON.parse(result);
      document.querySelector(".city").innerHTML = data.location.name;
      document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
      document.querySelector(".text").innerHTML = data.current.condition.text;

      document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
      document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/hr";
      document.querySelector(".feelslike").innerHTML = data.current.feelslike_c + "°C";
      document.getElementById("weather-icon").src = data.current.condition.icon;
      document.querySelector("#nextdayDate").innerHTML = data.forecast.forecastday[2].date;
      document.querySelector(".forecast-today p").innerHTML = data.forecast.forecastday[0].day.avgtemp_c+ "°C";
      document.querySelector(".forecast-tomorrow p").innerHTML = data.forecast.forecastday[1].day.avgtemp_c + "°C";
      document.querySelector(".forecast-nextday p").innerHTML = data.forecast.forecastday[2].day.avgtemp_c + "°C";
      document.getElementById("weathicon").src = data.forecast.forecastday[0].day.condition.icon;
      document.getElementById("weathicon1").src = data.forecast.forecastday[1].day.condition.icon;
      document.getElementById("weathicon2").src = data.forecast.forecastday[2].day.condition.icon;
      document.querySelector(".forecast-today h5").innerHTML = data.forecast.forecastday[0].day.condition.text;
      document.querySelector(".forecast-tomorrow h5").innerHTML = data.forecast.forecastday[1].day.condition.text;
      document.querySelector(".forecast-nextday h5").innerHTML = data.forecast.forecastday[2].day.condition.text;
      document.querySelector(".uv").innerHTML = data.current.uv;
      document.querySelector(".air-pressure").innerHTML = data.current.pressure_mb;
      document.querySelector(".sunrise").innerHTML = data.forecast.forecastday[0].astro.sunrise;
      document.querySelector(".sunset").innerHTML = data.forecast.forecastday[0].astro.sunset;

      let dateTime = (data.forecast.forecastday[0].hour[0].time).split(" ");
      let time = dateTime[1];
      document.querySelector(".hour1 h5").innerHTML = time;
      document.querySelector("#weat-icon").src = data.forecast.forecastday[0].hour[0].condition.icon;
      document.querySelector(".hour1 p").innerHTML = data.forecast.forecastday[0].hour[0].temp_c+"°C";

      dateTime = (data.forecast.forecastday[0].hour[6].time).split(" ");
      time = dateTime[1];
      document.querySelector(".hour2 h5").innerHTML = time;
      document.querySelector("#weat-icon1").src = data.forecast.forecastday[0].hour[6].condition.icon;
      document.querySelector(".hour2 p").innerHTML = data.forecast.forecastday[0].hour[6].temp_c+"°C";

      dateTime = (data.forecast.forecastday[0].hour[12].time).split(" ");
      time = dateTime[1];
      document.querySelector(".hour3 h5").innerHTML = time;
      document.querySelector("#weat-icon2").src = data.forecast.forecastday[0].hour[12].condition.icon;
      document.querySelector(".hour3 p").innerHTML = data.forecast.forecastday[0].hour[12].temp_c+"°C";

      dateTime = (data.forecast.forecastday[0].hour[18].time).split(" ");
      time = dateTime[1];
      document.querySelector(".hour4 h5").innerHTML = time;
      document.querySelector("#weat-icon3").src = data.forecast.forecastday[0].hour[18].condition.icon;
      document.querySelector(".hour4 p").innerHTML = data.forecast.forecastday[0].hour[18].temp_c+"°C";

    })
    .catch((error) => console.log(error, city));
  }
let currentTime = new Date().getHours();
let dayImage = "./src/images/day.jpg";
let nightImage = "./src/images/night.jpg";

if (currentTime >= 6 && currentTime < 18) {
  document.body.style.backgroundImage = `url(${dayImage})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  
} else {
  document.body.style.backgroundImage = `url(${nightImage})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}




