// 콜백 함수: input, output에 function도 가능 !

/**
function abc(x) {
  x(); // x = kim
  return 1;
}
function kim() {
  console.log("김씨안녕");
}

abc(kim);

*/

const getTen = () => 10;
const getOne = () => 1;
const abc = (x, y) => x() + y();

console.log(abc(getTen, getOne)); // 11

//

const arr = [1, 10, "apple", "banana", 3];
const test = (x) => {
  console.log(`${x}입니다.`);
};

arr.forEach(test);
arr.forEach((v) => {});
