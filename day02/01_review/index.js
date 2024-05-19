// Q1. 두 수의 합, 차, 곱 h2 태그로 표시하기
/*
const firstNum = Number(prompt("첫 번째 수"));
const secondNum = Number(prompt("두 번째 수"));

const plusTag = document.createElement("h2");
plusTag.innerText = `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
document.body.appendChild(plusTag);

const minusTag = document.createElement("h2");
minusTag.innerText = `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
document.body.appendChild(minusTag);

const multiTag = document.createElement("h2");
multiTag.innerText = `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
document.body.appendChild(multiTag);
*/

// Q2. 밑변 높이 입력 받고, 정삼각형의 넓이를 div 태그로 표시하기
// div: 폰트 20px, 글자 초록색
/*
const numBaseLine = Number(prompt("밑변"));
const numHeightLine = Number(prompt("높이"));

const areaTag = document.createElement("div");
areaTag.style.fontSize = "20px";
areaTag.style.color = "green";
areaTag.innerText = numBaseLine * numHeightLine * 0.5;

document.body.appendChild(areaTag);
*/

// Q3. [-] 0 [+]
const minus = document.createElement("button");
const plus = document.createElement("button");
const num = document.createElement("p");

minus.innerText = "-";
plus.innerText = "+";
num.innerText = "0";

plus.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
});
minus.addEventListener("click", () => {
  num.innerText = Number(num.innerText) - 1;
});

document.body.appendChild(minus);
document.body.appendChild(num);
document.body.appendChild(plus);
