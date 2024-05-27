// forEach, some, every, map, filter
const arr = [1, 3, 5, 7, 9];
const fruits = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "tomato",
  "grape",
  "strawberry",
];

// map(바꾸기)
// 모든 원소에 *10
const a1 = arr.map((v) => v * 10);

// 모든 원소가 본인 숫자만큼 제곱
const a2 = arr.map((v) => v ** v);

// 6보다 작으면 +10, 아니면 *10
const a3 = arr.map((v) => (v < 6 ? v + 10 : v * 10));

// (인덱스번호)홀수: *3, 짝수: *2
const a4 = arr.map((v, i) => (i % 2 ? v * 3 : v * 2));

// console.log(a4);

//
const f1 = fruits.map((v) => (v.includes("a") ? v.toUpperCase() : v.length));
// console.log(f1);

//
const b1 = arr.filter((v) => v > 5);
const b2 = arr.filter((v, i) => !(i % 2));

console.log(b2);

// 과일에서 6글자 이상인 애들만 걸러주고, 대문자화 하긔~
const f2 = fruits.filter((v) => v.length >= 6).map((v) => v.toUpperCase());
console.log(f2);

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];

// fruits에서 글자수 6음절, alphabet[]에 있는 알파벳 포함하는지?
const f3 = fruits
  .filter((v) => v.length == 6)
  .every((v) => alphabet.some((x) => v.includes(x)));
console.log(f3);

//

const c = Array(10); // 10칸 배열 만들기

// 0~100 배열
const c1 = Array(101) 
  .fill(0)
  .map((v, i) => i)
  .filter((v) => v % 2);

console.log(c1);

// str → array
// 1. split()
const d1 = "americano".split("");

// 2. Array.from();
const d2 = Array.from("americano");

// ★ 3. [..."str"];
const d3 = [..."americano"];

// a 빼기
const d4 = d3.filter((v) => v != "a");
console.log(d4);

// array → str
const e = ["coffee", "cookie"].join(""); // coffeecookie
const e1 = ["coffee", "cookie"].toString(); // coffee,cookie : , 때문에 잘 안씀

// "AAAbbb" → "aaaBBB"
const change = (x) =>
  [...x]
    .map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");

// n, k = k의 배수 나오게 하기
const makeArr = (n, k) =>
  Array(n)
    .fill(0)
    .map((v, i) => i + 1)
    .filter((v) => !(v % k));

console.log(makeArr(10, 3));
console.log(makeArr(20, 5));

// 1 ~ 100까지의 합
const arr100 = Array(100)
  .fill(0)
  .map((v, i) => i + 1);

console.log(arr100.reduce((acc, curr) => acc + curr));

const fruits1 = ["apple", "banana", "orange", "kiwi", "tomato"];

// 모음빼고 묶어서 출력
const result = fruits1
  .map((v) =>
    [...v].filter((v1) => ![..."aeiou"].some((v2) => v2 == v1)).join("")
  )
  .reduce((acc, curr) => acc + curr);

console.log(result);
