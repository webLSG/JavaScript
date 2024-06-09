// 시간
const timer = document.querySelector(".timer");
setInterval(() => {
  const date = new Date();
  const time = date.toLocaleString();
  timer.innerText = time;
}, 1000);

// 날씨
const weatherList = ["Clouds", "Clear", "Rain"];
const weatherFunc = (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5bb21517a62ec8ea076e4e76cb0629b2&units=metric`;
  const getWeather = fetch(URL);

  getWeather
    .then((v) => v.json())
    .then(({ name, main, weather }) => {
      const timerInfo = document.querySelector(".timerInfo");
      timerInfo.innerHTML = "";
      timerInfo.innerText = `${name} is ${weather[0].main}`;

      // 온도
      const temperature = document.querySelector(".temperature");
      const temperatureCity = document.querySelector(".temperatureCity");
      temperature.innerText = main.temp;
      temperatureCity.innerText = name;

      // 배경
      const img = document.querySelector(".img");
      weatherList.forEach((w) => img.classList.remove(w));
      img.classList.add(`${weather[0].main}`);
    });
};

const data = [
  { cityName: "SEOUL", lat: 37.566535, lon: 126.9779692 },
  { cityName: "QINGDAO", lat: 36.067117, lon: 120.382612 },
  { cityName: "TAIPEI", lat: 25.0671234, lon: 121.611452 },
  { cityName: "SYDNEY", lat: -33.8674769, lon: 151.2069776 },
];
data.forEach(({ cityName, lat, lon }) => {
  const btns = document.querySelector(".btns");
  const cityBtn = document.createElement("button");
  cityBtn.innerText = cityName;
  cityBtn.addEventListener("click", () => weatherFunc(lat, lon));
  btns.appendChild(cityBtn);
});
