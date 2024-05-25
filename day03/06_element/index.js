/** 참조: array, element */

/**
const newDiv = document.createElement("div");
const h1 = document.createElement("h1");

h1.innerText = "Sat";
newDiv.appendChild(h1);
*/

const div = document.querySelector(".box");
div.classList.forEach((v) => {
  console.log(v);
});

div.classList.add("pretty"); // 클래스 추가
div.classList.remove("large");
div.classList.contains("box"); // true
div.classList.replace("box", "wrapper");
div.classList.toggle("large"); // 있으면 빼고, 없으면 넣기
