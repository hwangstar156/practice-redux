import React from "react";
import { connect } from "react-redux";
const ToDo = ({ text }) => {
  return (
    <li>
      {text}
      <button>Del</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
};

export default connect(null, mapDispatchToProps)(ToDo);
