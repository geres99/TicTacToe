import React from "react";

function MyInput(props) {
  let [shopItemInput, setShopItemInput] = React.useState("Value");
  let [shopItem, setShopItem] = React.useState("");
  let [listNumber, setListNumber] = React.useState(1);
  return (
    <div>
      <input
        onChange={(e) => setShopItemInput(e.currentTarget.value)}
        value={shopItemInput}
      ></input>
      <button
        onClick={() => {
          setShopItemInput([""]);
          setListNumber(listNumber + 1);
          setShopItem([
            ...shopItem,
            <div className={listNumber}>
              {shopItemInput}
              <button>Tekst</button>
            </div>,
          ]);
        }}
      >
        Testing
      </button>
      <p>{shopItem}</p>
    </div>
  );
}

export default MyInput;
