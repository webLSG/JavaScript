const inputTag = document.querySelector(".inputTag");
const info = document.querySelector(".info");

inputTag.addEventListener("input", (e) => {
  const { length } = e.target.value;
  const isValidLength = 4 <= length && length <= 10;

  const color = isValidLength ? "green" : "red";
  info.style.color = color;

  const txt = isValidLength
    ? "글자가 충분합니다."
    : length < 4
    ? "글자가 짧습니다."
    : "글자가 깁니다.";
  info.innerText = txt;

  /**
  if (length < 4) {
    info.innerText = "글자가 짧습니다.";
  } else if (length < 11) {
    info.innerText = "글자가 충분합니다.";
  } else {
    info.innerText = "글자가 깁니다.";
  }
  */
});
