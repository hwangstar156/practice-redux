import { createStore } from "redux";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text }];
    case DELETE_TODO:
      return [];
    default:
      return [];
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
});
