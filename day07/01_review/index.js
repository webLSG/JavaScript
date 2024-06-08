import { data } from "./data.js";

const table = document.querySelector(".table");
data.forEach(({ id, fullName, jobTitle, race, university }) => {
  table.insertAdjacentHTML(
    "beforeend",
    `
    <div class="table__data">
      <div class="id">${id}</div>
      <div class="fullName">${fullName}</div>
      <div class="jobTitle">${jobTitle}</div>
      <div class="race">${race}</div>
      <div class="university">${university}</div>
    </div>
    `
  );
});

//

const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", (e) => {
  const searchInput = document.querySelector(".searchInput");
  const { value } = searchInput;
  table.innerHTML = `
  <div class="table__data">
    <div class="id">ID</div>
    <div class="fullName">Full Name</div>
    <div class="jobTitle">Job Title</div>
    <div class="race">Race</div>
    <div class="university">University</div>
  </div>`;

  data
    .filter(({ fullName }) => fullName.includes(value))
    .forEach(({ id, fullName, jobTitle, race, university }) => {
      table.insertAdjacentHTML(
        "beforeend",
        `
        <div class="table__data">
          <div class="id">${id}</div>
          <div class="fullName">${fullName}</div>
          <div class="jobTitle">${jobTitle}</div>
          <div class="race">${race}</div>
          <div class="university">${university}</div>
        </div>
        `
      );
    });
});
