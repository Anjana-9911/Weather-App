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
      document.querySelector(".humidity").innerHTML =
        data.current.humidity + "%";
      document.querySelector(".wind").innerHTML =
        data.current.wind_kph + "km/hr";
      document.querySelector(".feelslike").innerHTML =
        data.current.feelslike_c + "°C";
      document.getElementById("weather-icon").src = data.current.condition.icon;
      document.querySelector("#nextdayDate").innerHTML = data.forecast.forecastday[2].date;
    })
    .catch((error) => console.log(error, city));

 
}
