import { createStore } from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = (state = 0, action) => {
  console.log(action);
  return state;
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "hello" });
