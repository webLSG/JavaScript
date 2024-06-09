// 위도(latitude) 경도(longitude)
const data = [
  { cityName: "bupyeong", lat: 37.51, lon: 126.72 },
  { cityName: "fukuoka", lat: 33.5903547, lon: 130.4017155 },
  { cityName: "qingdao", lat: 36.067117, lon: 120.382612 },
  { cityName: "taipei", lat: 25.0671234, lon: 121.611452 },
  { cityName: "sydney", lat: -33.8674769, lon: 151.2069776 },
];

data.forEach(({ cityName, lat, lon }) => {
  const btn = document.querySelector(`.${cityName}`);

  btn.addEventListener("click", () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5bb21517a62ec8ea076e4e76cb0629b2`;
    const getWeatherData = fetch(URL);
    getWeatherData
      .then((value) => v.json())
      .then(({ name, weather }) => {
        const weatherBox = document.querySelector(".weatherBox");
        weatherBox.innerHTML = "";
        weatherBox.insertAdjacentHTML(
          "beforeend",
          `
				  <h1 class="weather">${name} Weather: ${weather[0].main}</h1>
				  `
        );
      });
  });
});
