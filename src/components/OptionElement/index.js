import React from "react";

function OptionElement(props) {
  return (
    <option name={props.name} value={props.value}>
      {props.name}
    </option>
  );
}

export default OptionElement;
