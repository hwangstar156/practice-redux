import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return { type: ADD, text };
};

const DeleteToDo = (id) => {
  return { type: DELETE, id: parseInt(id) };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return [];
  }
};

const store = createStore(reducer);

export const actionCreator = {
  addToDo,
  DeleteToDo,
};
export default store;
