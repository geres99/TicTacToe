import React from "react";

function MyInput(props) {
  return (
    <div>
      <input onChange={props.onChange} value={props.value}></input>
      <button onClick={props.test}>Testing</button>
    </div>
  );
}

export default MyInput;
