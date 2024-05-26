/**
 * 화살표 함수 arrow function
 * 기본: const name = () => { return ... }
 * 축약: const name = () => ; // return 없어도 됨
 */

const plus100 = (x) => x + 100;
console.log(plus100(3));

const getThird = (x) => x[2];
console.log(getThird([1, 2, 3, 4, 5]));

const strToLowerCase = (x) => x.toLowerCase() + "😎";
console.log(strToLowerCase("APPLE"));
