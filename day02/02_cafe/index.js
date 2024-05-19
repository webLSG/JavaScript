/*
아메 2500 : - 0 +
라떼 3000 : - 0 +
바닐 3500 : - 0 +

총액: 0
*/

const totalMenu = document.createElement("p");

// 아메리카노 Americano
const menuAmericano = document.createElement("span");
const minusAmericano = document.createElement("button");
const plusAmericano = document.createElement("button");
const cntAmericano = document.createElement("span");

menuAmericano.innerText = "아메리카노 2500";
minusAmericano.innerText = " - ";
plusAmericano.innerText = " + ";
cntAmericano.innerText = "0";

minusAmericano.style.margin = "0 10px";
plusAmericano.style.margin = "0 10px";

document.body.appendChild(menuAmericano);
document.body.appendChild(minusAmericano);
document.body.appendChild(cntAmericano);
document.body.appendChild(plusAmericano);

plusAmericano.addEventListener("click", () => {
  cntAmericano.innerText = Number(cntAmericano.innerText) + 1;
  totalMenu.innerText = Number(totalMenu.innerText) + 2500;
});
minusAmericano.addEventListener("click", () => {
  cntAmericano.innerText = Number(cntAmericano.innerText) - 1;
  totalMenu.innerText = Number(totalMenu.innerText) - 2500;
});

// 라떼 Latte
const menuLatte = document.createElement("span");
const minusLatte = document.createElement("button");
const plusLatte = document.createElement("button");
const cntLatte = document.createElement("span");

menuLatte.innerText = "라떼 3000";
minusLatte.innerText = " - ";
plusLatte.innerText = " + ";
cntLatte.innerText = "0";

minusLatte.style.margin = "0 10px";
plusLatte.style.margin = "0 10px";

document.body.appendChild(menuLatte);
document.body.appendChild(minusLatte);
document.body.appendChild(cntLatte);
document.body.appendChild(plusLatte);

plusLatte.addEventListener("click", () => {
  cntLatte.innerText = Number(cntLatte.innerText) + 1;
  totalMenu.innerText = Number(totalMenu.innerText) + 3000;
});
minusLatte.addEventListener("click", () => {
  cntLatte.innerText = Number(cntLatte.innerText) - 1;
  totalMenu.innerText = Number(totalMenu.innerText) - 3000;
});

// 바닐라 Vanila
const menuVanila = document.createElement("span");
const minusVanila = document.createElement("button");
const plusVanila = document.createElement("button");
const cntVanila = document.createElement("span");

menuVanila.innerText = "바닐라 3500";
minusVanila.innerText = " - ";
plusVanila.innerText = " + ";
cntVanila.innerText = "0";

minusVanila.style.margin = "0 10px";
plusVanila.style.margin = "0 10px";

document.body.appendChild(menuVanila);
document.body.appendChild(minusVanila);
document.body.appendChild(cntVanila);
document.body.appendChild(plusVanila);

plusVanila.addEventListener("click", () => {
  cntVanila.innerText = Number(cntVanila.innerText) + 1;
  totalMenu.innerText = Number(totalMenu.innerText) + 3500;
});
minusVanila.addEventListener("click", () => {
  cntVanila.innerText = Number(cntVanila.innerText) - 1;
  totalMenu.innerText = Number(totalMenu.innerText) - 3500;
});

// 총액
document.body.appendChild(totalMenu);
