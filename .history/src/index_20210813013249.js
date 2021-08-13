import { createStore } from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = (state = 0, action) => {
  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  }
  return state;
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });

console.log(countStore.getState());
