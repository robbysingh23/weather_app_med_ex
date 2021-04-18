fetch("https://api.openweathermap.org/data/2.5/weather?q=houston&appid=c82020d36c489384b37c5403c6b0c03d&units=imperial")
  .then(response => response.json())
  .then(body => {
    let weather = document.querySelector("#weather")
    weather.innerHTML = body.main.temp + "°";
  })
  .catch(error => alert("Please add your api key to the fetch url"));