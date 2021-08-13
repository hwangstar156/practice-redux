import React from "react";
import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <h1>TO Do</h1>
      <form>
        <input type="text" placeholder="write the To Dos" value={text} />
        <input type="submit" value="Add" />
      </form>
      <ul></ul>
    </>
  );
};

export default Home;
