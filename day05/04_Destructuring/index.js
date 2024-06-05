/**
 * destructuring
 */

// 배열 구조분해
/**
const week = ["월", "화", "수", "목", "금", "토", "일"];
const [monday, ...rest] = week; // 월, 나머지
const [mon, tue, ...rest] = week; // 월, 화, 나머지
const [mond, rest] = week; // 월, 화
*/

// 객체 구조분해
/**
const kimbab = {
  name: "참치김밥",
  ingredients: ["참치", "김", "밥", "계란"],
  price: 4000,
  sidedish: {
    main: "김치",
    soup: "된장국",
  },
};

//     구조분해 후 rename, 구조분해
const { name: kimbabName, price, ingredients, sidedish } = kimbab;
const [tuna, ...rest] = kimbab.ingredients;
const { soup: koreanSoup } = kimbab.sidedish;
const {
  sidedish: { main, soup },
} = kimbab;
console.log(main); // 김치
*/

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

//
users.forEach(({ name, age }) => console.log(`이름: ${name}\n나이: ${age}`));
users.forEach(({ name: engName, age: krAge }) =>
  console.log(`${engName}, ${krAge}`)
);

// id 삭제
const orig = users.map(({ name, age }) => {
  return { name: name, age: age };
});
// ↓ 축약
const a = users.map(({ name, age }) => ({ name: name, age: age }));
// ↓ 축약
const b = users.map(({ name, age }) => ({ name, age }));

// key값 변경
const c = users.map(({ name, age }) => ({ english: name, old: age }));
// ↓ 축약
const d = users.map(({ name: english, age: old }) => ({ english, old }));

// 추가
const e = users.map(({ name, age, nation = "Korean" }) => ({
  name,
  age,
  nation,
}));
