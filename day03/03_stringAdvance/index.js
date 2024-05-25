const coffee = "americano";

// 해당 글자 포함 유무
coffee.includes("cano"); // true

// 해당 글자의 인덱스 번호 반환. 없으면 -1 반환.
coffee.indexOf("i"); // 4

// 바꾸기
coffee.replace("a", "z"); // a를 z로 변경

// 시작하는지?, 끝나는지?
coffee.startsWith("ame"); // true
coffee.endsWith("cano"); // true

// 자르고 돌려주기, 0부터 5앞까지
coffee.slice(0, 5); // ameri

// 대문자, 소문자
coffee.toUpperCase(); // AMERICANO
coffee.toLowerCase(); // americano

// 문자 → 배열화
coffee.split("i"); // ["amer", "cano"];

// 반복
coffee.repeat(3); // americanoamericanoamericano
