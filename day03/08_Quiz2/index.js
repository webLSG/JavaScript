const divBox = document.querySelector(".box");

const colorList = ["red", "orange", "yellow", "green", "blue"];
const sizeList = ["small", "medium", "large", "x-large", "xx-large"];
const borderList = [
  "borderRadiusZero",
  "borderRadiusTen",
  "borderRadiusTwenty",
];

colorList.forEach((v) => {
  const colorBtn = document.createElement("button");
  colorBtn.innerText = v;
  colorBtn.addEventListener("click", () => {
    colorList.forEach((v1) => {
      divBox.classList.remove(v1);
    });
    divBox.classList.add(v);
  });

  const colorBox = document.querySelector(".color");
  colorBox.appendChild(colorBtn);
});

sizeList.forEach((v) => {
  const sizeBtn = document.createElement("button");
  sizeBtn.innerText = v;
  sizeBtn.addEventListener("click", () => {
    sizeList.forEach((v1) => {
      divBox.classList.remove(v1);
    });
    divBox.classList.add(v);
  });

  const sizeBox = document.querySelector(".size");
  sizeBox.appendChild(sizeBtn);
});

borderList.forEach((v) => {
  const borderBtn = document.createElement("button");
  borderBtn.innerText = v;
  borderBtn.addEventListener("click", () => {
    borderList.forEach((v1) => {
      divBox.classList.remove(v1);
    });
    divBox.classList.add(v);
  });

  const borderBox = document.querySelector(".border");
  borderBox.appendChild(borderBtn);
});
