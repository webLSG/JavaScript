const APIkeys = "5bb21517a62ec8ea076e4e76cb0629b2";
const weather = document.querySelector(".weather");

/**
weatherAPI
  .then((v) => v.json())
  .then((v) => {
    const weather = document.querySelector(".weather");
    weather.innerText = `부평역 날씨: ${v.weather[0].main}`;
  });
*/

const bupyeong = document.querySelector(".bupyeong");
bupyeong.addEventListener("click", () => {
  const lat = 37.48945088711253;
  const lon = 126.72434917358073;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkeys}`;
  const weatherAPI = fetch(URL);

  weatherAPI
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      weather.innerText = `부평역 날씨: ${v}`;
    });
});

const fukuoka = document.querySelector(".fukuoka");
fukuoka.addEventListener("click", () => {
  const lat = 33.5842357;
  const lon = 130.3882332;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkeys}`;
  const weatherAPI = fetch(URL);

  weatherAPI
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      weather.innerText = `후쿠오카 날씨: ${v}`;
    });
});

const qingdao = document.querySelector(".qingdao");
qingdao.addEventListener("click", () => {
  const lat = 36.0247;
  const lon = 120.357;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkeys}`;
  const weatherAPI = fetch(URL);

  weatherAPI
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      weather.innerText = `칭다오 날씨: ${v}`;
    });
});

const taipei = document.querySelector(".taipei");
taipei.addEventListener("click", () => {
  const lat = 25.011;
  const lon = 121.55;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkeys}`;
  const weatherAPI = fetch(URL);

  weatherAPI
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      weather.innerText = `타이페이 날씨: ${v}`;
    });
});

const sydney = document.querySelector(".sydney");
sydney.addEventListener("click", () => {
  const lat = -33.8667;
  const lon = 151.2;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkeys}`;
  const weatherAPI = fetch(URL);

  weatherAPI
    .then((v) => v.json())
    .then((v) => v.weather[0].main)
    .then((v) => {
      weather.innerText = `시드니 날씨: ${v}`;
    });
});
