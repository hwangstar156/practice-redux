import React from "react";
import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText('')l
  }

  return (
    <>
      <h1>TO Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write the To Dos"
          value={text}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul></ul>
    </>
  );
};

export default Home;