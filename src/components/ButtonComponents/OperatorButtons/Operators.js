import React from "react";
import {useState} from "react";
//import any components needed
import {operators} from '../../../data'
import OperatorButton from "./OperatorButton"
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div>
      {
        operatorState.map((operator => <OperatorButton operator={operator}>

        </OperatorButton>))
      }
    </div>
  );
};

export default Operators;