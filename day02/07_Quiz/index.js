// 총액
totalCnt = document.querySelector(".totalCnt");
totalPrice = document.querySelector(".totalPrice");

// 아메리카노
americanoPlusBtn = document.querySelector(".americanoPlusBtn");
americanoMinusBtn = document.querySelector(".americanoMinusBtn");

americanoPlusBtn.addEventListener("click", () => {
  totalCnt.innerText = Number(totalCnt.innerText) + 1;
  totalPrice.innerText = Number(totalPrice.innerText) + 3000;
});
americanoMinusBtn.addEventListener("click", () => {
  const minusCnt =
    Number(totalCnt.innerText) === 0 ? 0 : Number(totalCnt.innerText) - 1;
  totalCnt.innerText = minusCnt;

  const minusPrice =
    Number(totalPrice.innerText) === 0
      ? 0
      : Number(totalPrice.innerText) - 3000;
  totalPrice.innerText = minusPrice;
});

// 라떼
latteBtn = document.querySelector(".latteBtn");

latteBtn.addEventListener("click", () => {
  totalCnt.innerText = Number(totalCnt.innerText) + 1;
  totalPrice.innerText = Number(totalPrice.innerText) + 3500;
});

// 바닐라라떼
vanilaBtn = document.querySelector(".vanilaBtn");

vanilaBtn.addEventListener("click", () => {
  totalCnt.innerText = Number(totalCnt.innerText) + 1;
  totalPrice.innerText = Number(totalPrice.innerText) + 4000;
});

// reset
resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", () => {
  totalCnt.innerText = 0;
  totalPrice.innerText = 0;
});
