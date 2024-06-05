/**
const h1 = document.createElement("h1");
h1.innerHTML = `<button>버튼</button>`;
document.body.appendChild(h1);
*/

const friends = ["kim", "lee", "park"];
/**
const h1 = document.createElement("h1");
h1.innerText = "My Friends";
document.body.appendChild(h1);

friends.forEach((v) => {
  const ul = document.createElement("ul");
  ul.innerHTML = `<li>${v}</li>`;
  document.body.appendChild(ul);
});
 */

/**
const html = `
<h1>My Friends</h1>
<ul>
	${friends.map((v) => `<li>${v}</li>`).join("")}
</ul>
`;

document.body.innerHTML = html;
 */

/**
 * 1. createElement → appendChild
 * 2. innerHTML
 * 3. insertAdjacentHTML
 * 		afterbegin : 첫 번째 자식 앞에 넣기
 *    beforeend : 마지막 자식 뒤에 넣기
 */

const menu = document.querySelector(".menu");
menu.insertAdjacentHTML(
  "beforeend",
  `<div>
<h1>안녕하세요</h1>
<h2>진짜웃겨</h2>
<span>ㅋㅋㅋㅋ</span>
</div>`
);

const html = `
<h1>My Friends</h1>
<ul>
	${friends.map((v) => `<li>${v}</li>`).join("")}
</ul>
`;

menu.insertAdjacentHTML("beforeend", html);
