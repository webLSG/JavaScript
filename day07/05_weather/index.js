// 위도(latitude) 경도(longitude)
// 함수
const weatherFunc = (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5bb21517a62ec8ea076e4e76cb0629b2`;
  const getWeatherData = fetch(URL);
  getWeatherData
    .then((v) => v.json())
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
};

// 서울
const seoulLat = 37.566535;
const seoulLon = 126.9779692;
const seoul = document.querySelector(".seoul");
seoul.addEventListener("click", () => weatherFunc(seoulLat, seoulLon));

// 후쿠오카
const fukuokaLat = 33.5903547;
const fukuokaLon = 130.4017155;
const fukuoka = document.querySelector(".fukuoka");
fukuoka.addEventListener("click", () => weatherFunc(fukuokaLat, fukuokaLon));

// 칭다오
const qingdaoLat = 36.067117;
const qingdaoLon = 120.382612;
const qingdao = document.querySelector(".qingdao");
qingdao.addEventListener("click", () => weatherFunc(qingdaoLat, qingdaoLon));

// 타이페이
const taipeiLat = 25.0671234;
const taipeiLon = 121.611452;
const taipei = document.querySelector(".taipei");
taipei.addEventListener("click", () => weatherFunc(taipeiLat, taipeiLon));

// 시드니
const sydneyLat = -33.8674769;
const sydneyLon = 151.2069776;
const sydney = document.querySelector(".sydney");
sydney.addEventListener("click", () => weatherFunc(sydneyLat, sydneyLon));
