import React from "react";
import "./GameDesk.css";
import { Piece } from "./logic/Piece";

function GameDesk() {
  let myBoard = [];
  let boardSize = 3;
  let boardCreator = () => {
    for (let i = 0; i < boardSize; i++) {
      myBoard.push([]);
      for (let v = 0; v < boardSize; v++) {
        myBoard[i].push(["empty", i, v]);
      }
    }
  };
  boardCreator();
  let onClick = (e) => {
    let array = Number(e.target.attributes.array.nodeValue);
    let position = Number(e.target.attributes.position.nodeValue);
    let myArr = board.slice();
    if (myArr[array][position][0] === "empty") {
      if (whosTurn === false) {
        console.log(myBoard, board);
        myArr[array][position][0] = "square";
        setBoard(myArr);
        setWhosTurn(true);
      }
      if (whosTurn === true) {
        myArr[array][position][0] = "cross";
        setBoard(myArr);
        setWhosTurn(false);
      }
    }
  };
  let [whosTurn, setWhosTurn] = React.useState(false);
  let [board, setBoard] = React.useState(myBoard);
  return board.map((x) => (
    <div className="row">
      <div
        onClick={onClick}
        array={x[0][1]}
        position={x[0][2]}
        className={x[0][0]}
      ></div>
      <div
        onClick={onClick}
        array={x[1][1]}
        position={x[1][2]}
        className={x[1][0]}
      ></div>
      <div
        onClick={onClick}
        array={x[2][1]}
        position={x[2][2]}
        className={x[2][0]}
      ></div>
    </div>
  ));
}

export default GameDesk;
