import { createStore } from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = () => {
  return "nomuhuyun";
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
