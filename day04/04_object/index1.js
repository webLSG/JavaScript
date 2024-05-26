const menu = [
  {
    coffeeName: "americano",
    coffeePrice: 2000,
    shot: 2,
    coffeeBean: "Arabica",
  },

  {
    coffeeName: "latte",
    coffeePrice: 2500,
    shot: 2,
    coffeeBean: "Arabica",
  },

  {
    coffeeName: "mocha",
    coffeePrice: 3500,
    shot: 2,
    coffeeBean: "Liberica",
  },
];

// Q1. 가격 3000원 이하만 필터
const a = menu.filter((v) => v.coffeePrice <= 3000);
console.log(a);

// Q2. name 대문자, 가격 +1000
const b = menu.map((v) => {
  v.coffeeName = v.coffeeName.toUpperCase();
  v.coffeePrice += 1000;
  return v;
});
console.log(b);

// Q3. name, shot만
const c = menu.map((v) => ({ coffeeName: v.coffeeName, shot: v.shot }));
console.log(c);
