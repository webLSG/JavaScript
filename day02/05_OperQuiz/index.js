// Q1. 영어점수 입력, 60점 이상 합격 / 콘솔출력
/*
const eng = Number(prompt("영어 점수 입력"));
const isPass = eng >= 60 ? "합격" : "불합격";
console.log(`영어 합격여부: ${isPass}`);
*/

// Q2. 정수 입력, 양수/음수 / 콘솔출력
/*
const num1 = Number(prompt("정수 입력"));
console.log(num1 > 0 ? "양수" : "음수 또는 0");
*/

// Q3. 두 정수 입력, 큰 수 출력
/*
const num1 = Number(prompt("첫 번째 정수"));
const num2 = Number(prompt("두 번째 정수"));
console.log(num1 >= num2 ? num1 : num2);
*/

// Q4. 정수 입력, 절대값으로 바꾸기
/*
let q4num = Number(prompt("정수 입력"));
q4num == "" ? (q4num = null) : (q4num = q4num);
console.log(q4num ?? "입력하세요");

console.log(q4num < 0 ? -q4num : q4num);
*/

/*
// Q5. 정수 입력, 홀짝 출력
let q5num = Number(prompt("정수 입력"));
q5num == "" ? (q5num = null) : (q5num = q5num);

const Q5num
console.log(q5num ?? "입력하세요");

const result = q5num % 2;
console.log(result ? "홀수" : "짝수");
*/

//
const userName = prompt("이름 입력") || "guest";
console.log(`이름: ${userName}`);
