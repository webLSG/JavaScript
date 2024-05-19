totalCnt = document.querySelector(".totalCnt");
totalPrice = document.querySelector(".totalPrice");

americanoBtn = document.querySelector(".americanoBtn");
latteBtn = document.querySelector(".latteBtn");
vanilaBtn = document.querySelector(".vanilaBtn");

americanoBtn.addEventListener("click", () => {
  totalCnt.innerText = Number(totalCnt.innerText) + 1;
  totalPrice.innerText = Number(totalPrice.innerText) + 3000;
});

latteBtn.addEventListener("click", () => {
  totalCnt.innerText = Number(totalCnt.innerText) + 1;
  totalPrice.innerText = Number(totalPrice.innerText) + 3500;
});

vanilaBtn.addEventListener("click", () => {
  totalCnt.innerText = Number(totalCnt.innerText) + 1;
  totalPrice.innerText = Number(totalPrice.innerText) + 4000;
});

resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", () => {
  totalCnt.innerText = 0;
  totalPrice.innerText = 0;
});
