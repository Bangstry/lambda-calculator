import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="Operator" value={props.operator.value}>
      {props.operator.char}
    </button>
  );
};

export default OperatorButton