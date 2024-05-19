const plusBtn = document.createElement("button");
const minusBtn = document.createElement("button");
const divBox = document.createElement("div");

plusBtn.innerText = "+";
minusBtn.innerText = "-";
plusBtn.style.margin = "0 20px 20px 0";

divBox.style.width = "100px";
divBox.style.height = "100px";
divBox.style.backgroundColor = "purple";

document.body.appendChild(plusBtn);
document.body.appendChild(minusBtn);
document.body.appendChild(divBox);

//

plusBtn.addEventListener("click", () => {
  const boxW = parseInt(divBox.style.width) + 1;
  const boxH = parseInt(divBox.style.width) + 1;
  divBox.style.width = boxW + "px";
  divBox.style.height = boxH + "px";
});

minusBtn.addEventListener("click", () => {
  const boxW = parseInt(divBox.style.width) - 1;
  const boxH = parseInt(divBox.style.width) - 1;
  divBox.style.width = boxW + "px";
  divBox.style.height = boxH + "px";
});

/**
 * 100만 추출하기
 * Number("100px"): 불가능
 * parseInt("100px"): 가능
 */
