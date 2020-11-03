import React from "react";

function MyButton(props) {
  let myOnClick = () => {
    props.dupas(props.textValue);
  };
  return <button onClick={myOnClick}>{props.textValue}</button>;
}
export default MyButton;
