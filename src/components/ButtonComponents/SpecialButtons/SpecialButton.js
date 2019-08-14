import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="Special">
      {props.special}
    </button>
  );
};
export default SpecialButton;