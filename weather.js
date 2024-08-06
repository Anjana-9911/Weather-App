const apikey = "71dad9c8194f433195464324240508";
const apiurl = "https://api.weatherapi.com/v1/forecast.json";
let city = "";
let days = 3;

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
     

    })
    .catch((error) => console.log(error, city));

 
}
