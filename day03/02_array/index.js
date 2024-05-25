/** 데이터타입: 참조[array] */
const a = [10, 20, 30, 40, 50];

/**
console.log(a[0] + a[4]); //60

const b = a.push(60); // 맨 뒤에 들어감
console.log(b);

const c = a.pop(); // 맨 뒤에 있는거 빠짐
console.log(c);
 */

const menu = ["아메리카노", "라떼", "바닐라"];

// 추가
menu.push("민트");
menu.push("딸기스무디");
menu.push("디카페인");

// 덮어쓰기
menu[0] = "빅아아";

// 삭제
delete menu[3];
menu.pop();

// forEach 순회하다
menu.forEach((v) => {
  console.log(v);
});

//

const nums = [1, 3, 5, 7, 9];

nums.forEach((v) => {
  console.log(v + 10); // 11 13 15 17 19
});
nums.forEach((v) => {
  console.log(v ** v);
});
