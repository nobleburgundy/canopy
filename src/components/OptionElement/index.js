import React from "react";

function OptionElement(props) {
  return <option value={props.value}>{props.name}</option>;
}

export default OptionElement;
