/**
const fruits = ["사과", "오렌지", "파인애플", "키위", "망고", "아보카도"];

// Q1. 각 버튼 만들고 클릭 시 alert 창 생성
fruits.forEach((v) => {
  const fruitsBtn = document.createElement("button");
  fruitsBtn.innerText = v;
  fruitsBtn.addEventListener("click", () => {
    window.alert(`${v} 클릭됨`);
  });

  document.body.appendChild(fruitsBtn);
});
 */

//

const coffee = ["아메리카노 3000", "라떼 4000", "바닐라 5000"];
// Q2. split " " 각 버튼 생성,
const total = document.querySelector(".total");

coffee.forEach((v) => {
  const coffeeBtn = document.createElement("button");
  coffeeBtn.innerText = v;
  coffeeBtn.style.marginRight = "10px";

  coffeeBtn.addEventListener("click", () => {
    const price = Number(v.split(" ")[1]);
    total.innerText = Number(total.innerText) + price;
  });

  document.body.appendChild(coffeeBtn);
});
