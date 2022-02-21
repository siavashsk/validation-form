import React, { useState } from "react";
import { validate } from "../utils/validators";

const INPUT_STATES = {
  UNTOUCHED: "UNTOUCHED",
  VALID: "VALID",
  INVALID: "INVALID",
};

const Input = ({ label, id, type, validators, errorText }) => {
  const [input, setInput] = useState(INPUT_STATES.UNTOUCHED);

  function handleError(e) {
    if (validate(e.target.value, validators)) {
      setInput(INPUT_STATES.VALID);
    } else {
      setInput(INPUT_STATES.INVALID);
    }
    console.log(input);
  }
  function handleChange(e) {
    if (input !== INPUT_STATES.UNTOUCHED) {
      handleError(e);  
    }
  }
  return (
    <div
      className={`form-input ${
        input === "INVALID" ? "form-input--invalid" : "form-input"
      }`}
      data-testid="form-input"
    >
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onBlur={handleError} onChange={handleChange} />
      <p>{input === "INVALID" ? errorText : ""}</p>
    </div>
  );
};

export default Input;
