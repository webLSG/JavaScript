/*
const a = document.querySelector(".box");
console.log(a);

// const b = document.getElementsByClassName("box");
// console.log(b);

a.addEventListener("click", () => {
  console.log("집가고싶다");
});
*/

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const cntNum = document.querySelector(".cntNum");

plus.addEventListener("click", () => {
  cntNum.innerText = Number(cntNum.innerText) + 1;
});
minus.addEventListener("click", () => {
  const minusNum = Number(cntNum.innerText) - 1;
  cntNum.innerText = minusNum === -1 ? 0 : minusNum;
});

//

const bar = document.querySelector(".bar");
const xbtn = document.querySelector(".xbtn");

xbtn.style.display = "none";

bar.addEventListener("click", () => {
  bar.style.display = "none";
  xbtn.style.display = "block";
});
xbtn.addEventListener("click", () => {
  xbtn.style.display = "none";
  bar.style.display = "block";
});

//
