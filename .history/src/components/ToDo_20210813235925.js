import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text}
      <button onClick={onBtnClick}>Del</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreator.DeleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
