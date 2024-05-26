// 참조 ★array, element, ★object
/**
const book = {
  title: "JSP",
  price: 24000,
  author: ["전수효", "엄준식"],
  publishedYear: {
    year: 2024,
    month: 5,
    day: 26,
  },
};
 */

const book1 = {
  title: "자바스크립트는 왜 그 모양일까?",
  subtitle:
    "더글러스 크락포드가 알려주는 위험한 자바스크립트를 안전하게 사용하는 법",
  price: 25200,
  author: {
    real: "더글러스 크락포드",
    editor: "박수현",
  },
  publishedShop: "인사이트",

  rate: 6,
  review: 1,
  saleIndex: 288,
  publishedDate: {
    year: 2020,
    month: 5,
    day: 25,
  },
};

// 데이터 가져오기
// 1. dot 연산자
console.log(book1.title);
console.log(book1.author.editor);

// 2. bracket 연산자
console.log(book1["title"]);
console.log(book1["author"]["editor"]);

// 데이터 넣기
book1.isBestSeller = true;
console.log(book1.isBestSeller);

// 데이터 지우기
delete book1.subtitle;

// 데이터 존재유무
console.log("title" in book1);

// obj의 함수
book1.keys(); // keys값들만 돌려주기
book1.values(); // values값들만 돌려주기
