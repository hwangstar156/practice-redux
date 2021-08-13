import React from "react";
import { connect } from "react-redux";

const Detail = ({ toDos }) => {
  return <h1>Detail</h1>;
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === id) };
};

export default connect(mapStateToProps)(Detail);
