// 1.
/*
const btn = document.createElement("button");
btn.innerText = "클릭!";

btn.addEventListener("mouseover", () => {
  console.log("마우스 올라감");
});

document.body.appendChild(btn);
 */

// 2
/*
const divTag = document.createElement("div");
divTag.style.width = "100px";
divTag.style.height = "100px";
divTag.style.backgroundColor = "red";

divTag.addEventListener("mouseover", () => {
  divTag.style.backgroundColor = "blue";
});

divTag.addEventListener("mouseout", () => {
  divTag.style.backgroundColor = "red";
});

document.body.appendChild(divTag);
*/

// 3
/*
const btnTag = document.createElement("button");
btnTag.innerText = "파란상자";

document.body.appendChild(btnTag);

btnTag.addEventListener("click", () => {
  const bluebox = document.createElement("div");
  bluebox.style.width = "100px";
  bluebox.style.height = "100px";
  bluebox.style.margin = "10px";
  bluebox.style.backgroundColor = "blue";

  document.body.appendChild(bluebox);
});
*/

// 4
/*
const colorBox = document.createElement("div");
colorBox.style.width = "100px";
colorBox.style.height = "100px";
colorBox.style.backgroundColor = "black";
colorBox.style.marginBottom = "20px";

const btnPurple = document.createElement("button");
const btnPink = document.createElement("button");
const btnBlue = document.createElement("button");

btnPurple.innerText = "Purple";
btnPink.innerText = "Pink";
btnBlue.innerText = "Blue";

btnPurple.style.marginRight = "20px";
btnPink.style.marginRight = "20px";
btnBlue.style.marginRight = "20px";

btnPurple.addEventListener("click", () => {
  colorBox.style.backgroundColor = "#574b90";
});

btnPink.addEventListener("click", () => {
  colorBox.style.backgroundColor = "#f78fb3";
});

btnBlue.addEventListener("click", () => {
  colorBox.style.backgroundColor = "#3dc1d3";
});

document.body.appendChild(colorBox);

document.body.appendChild(btnPurple);
document.body.appendChild(btnPink);
document.body.appendChild(btnBlue);
*/

/*
// 5.
// 팔레트
const colorBox = document.createElement("div");
colorBox.style.width = "100px";
colorBox.style.height = "100px";
colorBox.style.backgroundColor = "white";
colorBox.style.marginBottom = "20px";
colorBox.style.border = "1px solid black";

document.body.appendChild(colorBox);

// 색상추가 버튼
const btnAddColor = document.createElement("button");
btnAddColor.innerText = "색상추가";
document.body.appendChild(btnAddColor);

const p = document.createElement("p");
document.body.appendChild(p);

btnAddColor.addEventListener("click", () => {
  const userColor = prompt("색깔 헥사코드 입력");
  const btnUserAddColor = document.createElement("button");
  btnUserAddColor.style.backgroundColor = userColor;
  btnUserAddColor.style.border = "none";

  btnUserAddColor.style.padding = "7px 23px";
  btnUserAddColor.style.marginRight = "10px";
  btnUserAddColor.innerText = userColor;

  document.body.appendChild(btnUserAddColor);

  btnUserAddColor.addEventListener("click", () => {
    colorBox.style.backgroundColor = userColor;
  });
});
*/
