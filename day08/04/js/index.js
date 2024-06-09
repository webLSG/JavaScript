const listAddBtn = document.querySelector(".listAddBtn");
const todolist = document.querySelector(".todolist");

listAddBtn.addEventListener("click", () => {
  const whatTodo = prompt("할일 📝");
  const whenTodo = prompt("시간 ⌚", new Date().getHours() + 1);

  todolist.insertAdjacentHTML(
    "beforeend",
    `
    <ul class="realList">
      <li>${whatTodo}</li>
      <li>${whenTodo}</li>
      <button>취소</button>
    </ul>
    `
  );
});

const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", () => (todolist.innerText = ""));
