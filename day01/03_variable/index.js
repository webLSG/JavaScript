const text = prompt("내용");
const color = prompt("색상");

const h1tag = document.createElement("h1");
const h2tag = document.createElement("h2");
const h3tag = document.createElement("h3");

h1tag.style.color = color;
h1tag.innerText = text;

h2tag.style.color = color;
h2tag.innerText = text;

h3tag.style.color = color;
h3tag.innerText = text;

document.body.appendChild(h1tag);
document.body.appendChild(h2tag);
document.body.appendChild(h3tag);

//

const enterTag = prompt("만들고 싶은 태그");
const enterText = prompt("넣고 싶은 내용");
const enterFontColor = prompt("폰트색상");

const userTag = document.createElement(enterTag);

userTag.style.color = enterFontColor;
userTag.innerText = enterText;

document.body.appendChild(userTag);
