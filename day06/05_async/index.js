/**
 * web - 데이터 가져오기, 지도 확인, 시간재기
 *
 * 비동기 프로그래밍 코드
 * 1. setTimeout(() => {}, timeout);
 * 2. setInterval(() => {}, timeout);

setTimeout(() => {
  console.log("hello");
}, 1000);
setInterval(() => {
  console.log("world");
}, 1000);
 */

const h1 = document.createElement("h1");

setInterval(() => {
  const date = new Date();
  h1.innerText = date.toLocaleString();
  document.body.appendChild(h1);
}, 1000);
