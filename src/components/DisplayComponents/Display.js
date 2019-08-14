import React from "react";

const Display = (props) => {
  return <div className="display">
  <p className="calculatorValue">{props.number}</p>
  </div>;
};
export {Display};