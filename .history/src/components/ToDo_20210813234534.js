import React from "react";

const ToDo = ({ text }) => {
  return (
    <li>
      {text}
      <button>Del</button>
    </li>
  );
};
export default ToDo;
