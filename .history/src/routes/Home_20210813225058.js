import React from "react";

const Home = () => {
  return (
    <>
      <h1>TO Do</h1>
      <form>
        <input type="text" placeholder="write the To Dos" />
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default Home;
