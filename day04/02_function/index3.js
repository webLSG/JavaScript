const a = () => {
  console.log("아침");
};
const b = () => {
  console.log("점심");
};
const c = () => {
  console.log("저녁");
};

const morning = document.querySelector(".morning");
const lunch = document.querySelector(".lunch");
const dinner = document.querySelector(".dinner");

morning.addEventListener("click", () => {
  a();
  b();
  c();
});
lunch.addEventListener("click", () => {
  b();
  c();
  a();
});
dinner.addEventListener("click", () => {
  c();
  a();
  b();
});
