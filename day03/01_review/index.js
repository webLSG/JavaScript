// counter
const minusBtn = document.querySelector(".minusBtn");
const plusBtn = document.querySelector(".plusBtn");
const cntNum = document.querySelector(".cntNum");

minusBtn.addEventListener("click", () => {
  const limitNum = Number(cntNum.innerText) - 1;
  cntNum.innerText = limitNum === -11 ? -10 : limitNum;
  Number(cntNum.innerText) === -10
    ? (cntNum.style.color = "red")
    : (cntNum.style.color = "black");
});

/**
plusBtn.addEventListener("click", () => {
  const limitNum = Number(cntNum.innerText) + 1;
  cntNum.innerText = limitNum === 11 ? 10 : limitNum;
  Number(cntNum.innerText) === 10
    ? (cntNum.style.color = "red")
    : (cntNum.style.color = "black");
});
 */
//
plusBtn.addEventListener("click", () => {
  const limitNum = Number(cntNum.innerText) + 1;
  const newLimitNum = limitNum === 11 ? 10 : limitNum;

  cntNum.innerText = newLimitNum;
  cntNum.style.color = newLimitNum === 10 ? "red" : "black";
});
