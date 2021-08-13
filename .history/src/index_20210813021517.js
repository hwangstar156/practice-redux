import { createStore } from "redux";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return [];
  }
};

const store = createStore();

const createToDo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
});
