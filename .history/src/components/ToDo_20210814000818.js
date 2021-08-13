import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Detail from "../routes/Detail";
import { actionCreator } from "../store";
const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`} component={Detail}>
        {text}
        <button onClick={onBtnClick}>Del</button>
      </Link>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreator.DeleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
