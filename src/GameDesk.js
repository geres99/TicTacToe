import React, { useEffect } from "react";
import "./GameDesk.css";
import { Game } from "./logic/Game";
import { Piece } from "./logic/Piece";

let game = new Game();
function GameDesk() {
  let testFunction = (x) => {
    let sizeCheck = [];
    for (let i = 0; i < Number(inputValue); i++) {
      sizeCheck.push(
        <div
          onClick={onClick}
          array={x[0][1]}
          position={i}
          className={x[i][0]}
        ></div>
      );
    }
    return sizeCheck;
  };

  let inputFunction = (e) => {
    setInputValue(e.target.value);
  };

  let restartGame = () => {
    game = new Game();
    setWhosTurn(false);
    setInputValue("");
    setBoard([]);
    setisDisabled(false);
  };

  let myBoard = [];
  let boardSize = 0;
  let boardCreator = () => {
    boardSize = Number(inputValue);
    for (let i = 0; i < boardSize; i++) {
      myBoard.push([]);
      for (let v = 0; v < boardSize; v++) {
        myBoard[i].push(["empty", i, v]);
      }
    }
  };

  let startGame = () => {
    game = new Game();

    setMaxLinesToWin([inputValue]);

    if (
      Math.floor(inputValue) % 1 === 0 &&
      inputValue !== "" &&
      Math.floor(inputValue) > 0
    ) {
      setisDisabled(true);
    }
    if (Math.floor(inputValue) < 20) {
      boardCreator();
      setBoard(myBoard);
    } else {
      setisDisabled(false);
    }
  };

  useEffect(() => {});

  let onClick = (e) => {
    let array = Number(e.target.attributes.array.nodeValue);
    let position = Number(e.target.attributes.position.nodeValue);
    let myArr = board.slice();

    if (myArr[array][position][0] === "empty") {
      if (whosTurn === false) {
        myArr[array][position][0] = "square";
        let myPiece = new Piece(
          myArr[array][position][1],
          board[array][position][2],
          board[array][position][0]
        );
        game.addPiece(myPiece);

        setBoard(myArr);
        setWhosTurn(true);

        if (game.getWinner() === true) {
          alert("You Won!");
          game = new Game();
        }
      }
      if (whosTurn === true) {
        myArr[array][position][0] = "cross";
        let myPiece = new Piece(
          myArr[array][position][1],
          board[array][position][2],
          board[array][position][0]
        );
        game.addPiece(myPiece);

        setBoard(myArr);
        setWhosTurn(false);

        if (game.getWinner() === true) {
          alert("You Won!");
          game = new Game();
        }
      }
    }
  };

  let [whosTurn, setWhosTurn] = React.useState(false);
  let [board, setBoard] = React.useState([]);
  let [inputValue, setInputValue] = React.useState();
  let [isDisabled, setisDisabled] = React.useState(false);
  let [maxLinesToWin, setMaxLinesToWin] = React.useState([]);

  return (
    <div>
      <input
        onChange={inputFunction}
        value={inputValue}
        disabled={isDisabled}
      />
      <button onClick={startGame}>StartGame</button>
      <button onClick={restartGame}>RestartGame</button>
      {maxLinesToWin.map((x) => (
        <div>
          <input></input>Select line length to win: 1 - {x.toString()}
          <button>Start Game</button>
        </div>
      ))}
      {board.map((x) => (
        <div className="row">{testFunction(x)}</div>
      ))}
    </div>
  );
}

export default GameDesk;
