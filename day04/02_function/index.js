/**
// 함수: input[str, boolean, element, null] → output[str, boolean, element, null]

function hello(x) {
  return `${x} 안녕 !`;
}

const a = hello("연우");
const b = hello("js");
console.log(a);
console.log(b);
*/

// 일반함수
// Q1. x 넣으면 +100 리턴 함수
function plusHundred(x) {
  return x + 100;
}
console.log(plusHundred(1));

// Q2. x 넣으면 대문자화+'😀' 리턴
function strToUpperCase(x) {
  return x.toUpperCase() + "😀";
}
console.log(strToUpperCase("apple"));

// Q3. 배열x 두번째 원소 리턴
function getSecond(x) {
  return x[1];
}
console.log(getSecond([1, 2, 3, 4]));

// Q4. 럭키비키
function luckyVicky(x) {
  return x + " 럭키비키💚";
}
console.log(luckyVicky("banana"));
