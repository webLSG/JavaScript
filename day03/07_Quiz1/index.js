const divBox = document.querySelector(".box");

const borderBtn = document.querySelector(".borderBtn");
const sizeBtn = document.querySelector(".sizeBtn");
const colorBtn = document.querySelector(".colorBtn");

borderBtn.addEventListener("click", () => {
  const btnText =
    borderBtn.innerText == "테두리 둥글게" ? "테두리 직각" : "테두리 둥글게";
  borderBtn.innerText = btnText;

  divBox.classList.toggle("borderRadiusZero");
  divBox.classList.toggle("borderRadiusTen");
});

sizeBtn.addEventListener("click", () => {
  const btnText = sizeBtn.innerText == "늘리기" ? "줄이기" : "늘리기";
  sizeBtn.innerText = btnText;

  divBox.classList.toggle("medium");
  divBox.classList.toggle("large");
});

colorBtn.addEventListener("click", () => {
  const btnText = colorBtn.innerText == "파란색" ? "빨간색" : "파란색";
  colorBtn.innerText = btnText;

  divBox.classList.toggle("red");
  divBox.classList.toggle("blue");
});
