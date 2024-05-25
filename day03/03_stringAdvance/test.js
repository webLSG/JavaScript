const fruits = ["apple", "banana", "orange", "melon", "kiwi"];

// array에만 forEach있음 !

// a를 포함하는지?
fruits.forEach((v) => {
  console.log(`${v} a를 ${v.includes("a") ? "포함" : "미포함"}`);
});

// 6글자 이상이면 대문자, 아니면 두번반복표시
fruits.forEach((v) => {
  const isSixOver = v.length >= 6;
  const result = isSixOver ? v.toUpperCase() : v.repeat(2);
  console.log(result);
});

// 본인 글자 길이만큼 반복표시, 대문자
fruits.forEach((v) => {
  console.log(v.repeat(v.length).toUpperCase());
});
