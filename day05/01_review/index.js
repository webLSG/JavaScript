// Array type
const coffeeMenu = [
  // Obj type
  {
    name: "아메리카노",
    price: 2500,
    isRemained: false,
  },
  {
    name: "라떼",
    price: 3500,
    isRemained: false,
  },
  {
    name: "바닐라라떼",
    price: 3000,
    isRemained: true,
  },
];

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
