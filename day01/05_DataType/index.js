/**
 * const 변수명 = 데이터(기본 + 참조)
 *
 * 1. 기본 타입
 * - 숫자타입
 * const a = 1;
 *
 * - 문자타입
 * const e = 'txt';
 * const f = "txt";
 * const g = `내 최애 음료는 ${e}`;
 *
 */

/**
const mbti = prompt("MBTI");
const food = prompt("FOOD");

alert(`당신의 MBTI는 ${mbti}, 최애 음식은 ${food}이군요!😊`);

//////////////////

const day = prompt("오늘의 날짜는?");
const work = prompt("오늘의 일정은?");

alert(`오늘의 날짜는 ${day}이고, ${work} 하실 예정이군요!`);
*/

/*
const first = prompt("첫 번째 수 입력");
const second = prompt("두 번째 수 입력");

const numFirst = Number(first);
const numSecond = Number(second);

alert(`두 수의 합은 ${numFirst + numSecond}이다`);
*/

// Q1

const age = prompt("나이 입력");
const year = 2024 - Number(age) + 1;

const h1AgeTag = document.createElement("h1");
h1AgeTag.innerText = `${year}년생이시군요 !`;

document.body.appendChild(h1AgeTag);

// Q2
const h1Tag = document.createElement("h1");

const length = prompt("정사각형 한변의 길이");
const a = Number(length) * Number(length);

h1Tag.innerText = `정사각형의 넓이는 ${a}이다.`;

document.body.appendChild(h1Tag);
