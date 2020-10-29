import "./App.css";
import React from "react";
import MyInput from "./MyInput";

function App() {
  let [shopItemInput, setShopItemInput] = React.useState("");
  let test1 = function () {
    setShopItemInput("");
  };

  let onChange1 = (e) => {
    setShopItemInput(e.currentTarget.value);
    console.log(shopItemInput);
  };

  return (
    <div className="App">
      {<MyInput onChange={onChange1} test={test1} value={shopItemInput} />}
    </div>
  );
}

export default App;
