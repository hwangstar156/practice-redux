import { createStore } from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = () => {};

const countStore = createStore(countModifier);

console.log(countStore);
