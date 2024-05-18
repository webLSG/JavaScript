// document: js가 html을 만들기 위한 장소, html영역
// h1 태그 만들기
// const h1tag = document.createElement("h1");
// h1tag.innerText = "자바스크립트 수업중";
// document.body.appendChild(h1tag);

// ///////////////////

// const btn = document.createElement("button");

// //css
// btn.style.backgroundColor = "skyblue";
// btn.style.padding = "10px";
// btn.style.fontSize = "10px";
// btn.style.border = "none";

// btn.innerText = "클릭 !";
// document.body.appendChild(btn);

// /////////////////

// const a = prompt("점심 뭐 먹을거야?");
// console.log(a);

// //////////////////

// const divColor = prompt("배경색");
// const divTxt = prompt("내용");

// const div = document.createElement("div");

// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = divColor;
// div.innerText = divTxt;

// document.body.appendChild(div);

// //////////////////
/*
const btnFontColor = prompt("폰트 색깔");
const btnTxt = prompt("내용");

const btn = document.createElement("button");

btn.style.color = btnFontColor;
btn.innerText = btnTxt;

document.body.appendChild(btn);
*/

// ///////////////

const width = prompt("넓이");
const height = prompt("높이");
const bgcolor = prompt("배경색");
const txt = prompt("내용");

const div = document.createElement("div");

div.style.width = width;
div.style.height = height;
div.style.backgroundColor = bgcolor;
div.innerText = txt;

document.body.appendChild(div);
