// https://fakerapi.it/api/v1/credit_cards?_quantity=50
// number 앞에 4개 *, 유효기간 2024/ 추가

const getCardData = fetch(
  "https://fakerapi.it/api/v1/credit_cards?_quantity=10"
);

getCardData
  .then((v) => v.json())
  .then((v) => v.data)
  .then((v) =>
    v.forEach(({ type, number, expiration, owner }) =>
      bindData(type, number, expiration, owner)
    )
  )
  .catch((v) => alert("서버터짐"));

const bindData = (type, number, expiration, owner) => {
  const table = document.querySelector(".table");
  const newNum = number.slice(4, number.length).padStart(number.length, "*");
  // "****" + number.slice(4, number.length).join("");

  const newEx = new Date().getFullYear() + "/" + expiration;

  table.insertAdjacentHTML(
    "beforeend",
    `
    <div class="table__data">
    <div class="type">${type}</div>
    <div class="number">${newNum}</div>
    <div class="expiration">${newEx}</div>
    <div class="owner">${owner}</div>
    </div>
    `
  );
};
