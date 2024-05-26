// Q1. 팔레트
const colorList = [
  "#cd84f1",
  "#ffcccc",
  "#ff4d4d",
  "#ffaf40",
  "#fffa65",
  "#c56cf0",
  "#ffb8b8",
  "#ff3838",
  "#ff9f1a",
  "#fff200",
];

colorList.forEach((v) => {
  const colorBox = document.createElement("div");
  colorBox.classList.add(".box");
  colorBox.style.backgroundColor = v;
  colorBox.addEventListener("click", () => {
    alert(`${v} color is clicked !`);
  });

  const palette = document.querySelector(".palette");
  palette.appendChild(colorBox);
});
