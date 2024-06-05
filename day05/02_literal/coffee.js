// Array type
const coffeeMenu = [
  // Obj type
  {
    name: "americano",
    price: 2500,
    isRemained: false,
  },
  {
    name: "latte",
    price: 3500,
    isRemained: false,
  },
  {
    name: "vanila latte",
    price: 3000,
    isRemained: true,
  },
];

/**
coffeeMenu.forEach((v) => {
  const name = document.createElement("h3");
  const price = document.createElement("h5");
  const isRemained = document.createElement("span");

  name.innerText = v.name;
  price.innerText = v.price;
  isRemained.innerText = `재고: ${v.isRemained ? "있음" : "없음"}`;

  const coffee = document.createElement("div");
  coffee.className = "coffee";
  coffee.appendChild(name);
  coffee.appendChild(price);
  coffee.appendChild(isRemained);

  const menu = document.querySelector(".menu");
  menu.appendChild(coffee);
});

*/

const nameTag = (name) => {
  const rename = name[0].toUpperCase() + name.slice(1, name.length);
  return `<h3>${rename}</h3>`;
};
const priceTag = (price) => {
  const discountPrice = price >= 3000 ? price * 0.8 : price;
  return `<h5>${discountPrice}</h5>`;
};
const stockTag = (isRemained) => {
  const className = isRemained ? "blue" : "red";
  const text = isRemained ? "있음" : "없음";

  return `<span class = ${className}>${text}</span>`;
};

const coffeeTag = (v) => {
  return `<div class = "coffee">
    ${nameTag(v.name)}
    ${priceTag(v.price)}
    ${stockTag(v.isRemained)}
  </div>
  `;
};

coffeeMenu.forEach((v) =>
  document.querySelector(".menu").insertAdjacentHTML("beforeend", coffeeTag(v))
);
