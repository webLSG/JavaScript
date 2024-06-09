const today = document.querySelector(".today");
const time = document.querySelector(".time");

setInterval(() => {
  const date = new Date();
  const todayMark = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const timeMark = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  today.innerText = todayMark;
  time.innerText = timeMark;
}, 1000);
