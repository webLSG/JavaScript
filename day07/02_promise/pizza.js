/**
 * 피자 만들기
 * 1. 도우 준비
 * 2. 토마토소스 추가
 * 3. 토핑 추가
 * 4. 피자 굽기
 * 5. 먹기
 */

// 1
const prepareDough = () => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("도우 준비 완료 !");
      success(`🥯`);
    }, 500);
  });
};

// 2
const addSource = (dough) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("토마토소스 추가 완료 !");
      success(`${dough} + 🍅`);
    }, 1000);
  });
};

// 3
const addTopping = (doughWithSource) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("토핑 추가 완료 !");
      success(`${doughWithSource} + 🥓`);
    }, 1000);
  });
};

// 4
const bakePizza = (readyBake) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log("피자 굽기 완료 !");
      success(`${readyBake} = 🍕 먹기 !`);
    }, 500);
  });
};

// 5
prepareDough()
  .then((v) => addSource(v))
  .then((v) => addTopping(v))
  .then((v) => bakePizza(v))
  .then((v) => console.log(v));
