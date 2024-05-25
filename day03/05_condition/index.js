/** condition[조건]
const a = Number(prompt("숫자입력"));

if (a > 0) {
  alert("0보다 큽니다.");
} else if (a == 0) {
  alert("0입니다.");
} else {
  alert("0보다 작습니다.");
}
 */

/**
// Q1. 영어점수 90이상 a, 80 b, 70 c, 60 d, 그 외 나락
const eng = Number(prompt("영어점수입력"));

if (eng >= 90) {
  alert("A");
} else if (eng >= 80) {
  alert("B");
} else if (eng >= 70) {
  alert("C");
} else if (eng >= 60) {
  alert("D");
} else {
  alert("나락");
}
 */

/**
// Q2.
const password = prompt("비밀번호 설정");

const pwLength = password.length >= 8;
const pwSpecialChar =
  password.includes("!") || password.includes("#") || password.includes("$");
const pwStartEnd = password.startsWith("I") && password.endsWith("T");

if (!pwLength) {
  alert("비밀번호가 짧습니다");
} else if (!pwSpecialChar) {
  alert("특수문자 !, #, $가 없습니다.");
} else if (!pwStartEnd) {
  alert("I와 T를 꼭 시작과 끝에 넣어주세요");
} else {
  alert("비밀번호 설정 완료 !");
}
 */

const special = ["!", "#", "$"];

special.some((v) => {
  // 하나라도 true이면 true 리턴 (or)
  return v == "$"; // true
});

special.every((v) => {
  // 모든게 true이면 true 리턴 (and)
  return v != "@"; // true
});

// Q3.
const password = prompt("비밀번호 설정");

const pwLength = password.length >= 8;
const pwSpecialChar = "!#$".split("").some((v) => {
  return password.includes(v);
});

const pwStartEnd = password.startsWith("I") && password.endsWith("T");

if (!pwLength) {
  alert("비밀번호가 짧습니다");
} else if (!pwSpecialChar) {
  alert("특수문자 !, #, $가 없습니다.");
} else if (!pwStartEnd) {
  alert("I와 T를 꼭 시작과 끝에 넣어주세요");
} else {
  alert("비밀번호 설정 완료 !");
}
