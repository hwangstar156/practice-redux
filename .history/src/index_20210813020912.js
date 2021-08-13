const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");

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
