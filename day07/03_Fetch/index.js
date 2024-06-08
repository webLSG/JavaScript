// fetch() 가져오다
// url을 넣으면 데이터를 돌려주는 함수
// return값 Promise()

const getData = fetch("https://fakerapi.it/api/v1/addresses?_quantity=100");

// v type = response
// getData.then((v) => v.json()).then((v) => console.log(v));

// country, street, streetName
// getData.then((v) => v.json()).then((v) => console.log(v.data[0].country));
getData
  .then((v) => v.json())
  .then((v) => v.data)
  .then((v) =>
    v.forEach(({ country, street, streetName }) =>
      bindData(street, streetName, country)
    )
  )
  .catch((v) => console.log("요청이 너무 많습니다"));

const bindData = (street, streetName, country) => {
  const table = document.querySelector(".table");
  table.insertAdjacentHTML(
    "beforeend",
    `
    <div class="table__data">
      <div class="country">${country}</div>
      <div class="street">${street}</div>
      <div class="streetName">${streetName}</div>
    </div>
    `
  );
};
