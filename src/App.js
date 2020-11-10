import "./App.css";
import React, { useEffect } from "react";
import MyButton from "./MyButton";

function App() {
  let onClicks = (e) => {
    console.log(e);
    setButtonInfo(buttoninfo.filter((x) => x !== e));
  };
  console.log("app render");
  let [inputValue, setInputValue] = React.useState("");
  let [buttoninfo, setButtonInfo] = React.useState([]);
  let [time, setTime] = React.useState(new Date());
  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
        }}
        value={inputValue}
      />
      {inputValue}
      <button
        onClick={() => {
          setButtonInfo([...buttoninfo, inputValue]);
        }}
      >
        dupa
      </button>
      {buttoninfo.map((chuj) => (
        <MyButton textValue={chuj} noob={setButtonInfo} dupas={onClicks} />
      ))}
      <div>{time.toLocaleTimeString()}</div>
    </div>
  );
}

export default App;
