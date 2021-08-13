import { createStore } from "redux";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return [];
    default:
      return [];
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "delete";

    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(button);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDo);

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text, id: Date.now() });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
});
