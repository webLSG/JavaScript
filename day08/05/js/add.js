import { todoListData } from "./year.js";
const todoList = [];

const todoListTag = document.querySelector(".todolist");
const addBtn = document.querySelector(".button");

addBtn.addEventListener("click", () => {
  const todo = prompt("할일 적기");
  const time = prompt("시간 적기");

  todoListTag.innerHTML = ""; // reset

  todoList.push({ todo, time });
  todoList.forEach(({ time, todo }, index) => {
    todoListTag.appendChild(makeList(index, time, todo));
  });
});

const makeList = (index, time, todo) => {
  const li = document.createElement("li");
  li.dataset.id = index;

  const timeSpan = document.createElement("span");
  timeSpan.textContent = time; // .innerText도 됨
  li.appendChild(timeSpan);

  const todoSpan = document.createElement("span");
  todoSpan.textContent = todo;
  li.appendChild(todoSpan);

  const button = document.createElement("button");
  button.textContent = "삭제";
  button.classList.add("delButton");

  // 버튼에 이벤트 리스너 추가
  button.addEventListener("click", () => {
    const newtodoList = todoList.filter((_, i) => i != index); // v가 쓸일이 없기 때문에 _ 씀

    // todoListTag 전체삭제
    todoListTag.innerHTML = "";

    // 뉴리스트로 기존리스트 태그 자식을 다시 만들기
    newtodoList.forEach(({ time, todo }, index) => {
      todoListTag.appendChild(makeList(index, time, todo));
    });

    // 기존리스트 갱신
    todoList.length = 0;
    todoList.push(...newtodoList);
  });

  li.appendChild(button);
  return li;
};
