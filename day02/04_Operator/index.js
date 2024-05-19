/*
Operator 연산자
1. 할당 연사자
= += -= *= **= /= %=
ex
let a = 4;
a += 5; // a = a + 5;
a -= 4; // a = a - 4;

2. 비교 연산자
< > <= >= == !=
=== !== 데이터타입까지 비교

3. 논리 연산자
&& || !
const d1 = 5 > 0 && 0 == "0" // T
const d2 = 5 > 0 && 0 === "0" // F
const d3 = !true // F
const d4 = !"happy" // F
const d5 = !!"happy" // T [암묵적 타입캐스팅]

4. 삼항연산자
조건 ? T : F
const height = Number(prompt("신장 입력"));
const e = height >= 140 ? "탑승가능" : "탑승불가능"

5. es6 이후 연산자
- typeof()
- Nullish ??
const h = prompt("아무거나 입력");
cosole.log(h ?? "입력하세요")
null, undefined일 경우 뒤에꺼 선택

[단축 평가 Short-circuit]
true  || "dog" // true
false || "dog" // "dog"
true  && "dog" // "dog"
false && "dog" // false






*/
