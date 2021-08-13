import { createStore } from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};
plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
