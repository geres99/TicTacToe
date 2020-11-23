import React, { useEffect } from "react";
import "./GameDesk.css";
import { Game } from "./logic/Game";
import { Piece } from "./logic/Piece";

let game = new Game();
function GameDesk() {
  let testFunction = (x) => {
    let sizeCheck = [];
    for (let i = 0; i < Number(inputValueWin); i++) {
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
  let inputFunctionWin = (e) => {
    setInputValueWin(e.target.value);
  };

  let restartGame = () => {
    game = new Game();
    setMaxLinesToWin([]);
    setWhosTurn(false);
    setInputValue("");
    setInputValueWin("");
    setBoard([]);
    setisDisabled(false);
  };

  let myBoard = [];
  let boardSize = 0;
  let boardCreator = () => {
    boardSize = Number(inputValueWin);
    for (let i = 0; i < boardSize; i++) {
      myBoard.push([]);
      for (let v = 0; v < boardSize; v++) {
        myBoard[i].push(["empty", i, v]);
      }
    }
  };

  let selectBoardSize = () => {
    if (Number(inputValueWin) >= 1 && Number(inputValueWin) <= 20) {
      setMaxLinesToWin([inputValueWin]);
    }
  };

  let startGame = () => {
    if (
      Number(inputValue) >= 1 &&
      Number(inputValue) <= Number(inputValueWin)
    ) {
      game = new Game();
      game.addWinCondition(Number(inputValue));
      game.addDrawCondition(Number(inputValueWin) * Number(inputValueWin));

      if (
        Math.floor(inputValueWin) % 1 === 0 &&
        inputValueWin !== "" &&
        Math.floor(inputValueWin) > 0
      ) {
        setisDisabled(true);
      }
      if (Math.floor(inputValueWin) <= 20) {
        boardCreator();
        setBoard(myBoard);
      } else {
        setisDisabled(false);
      }
    }
  };

  useEffect(() => {});

  let onClick = (e) => {
    let array = Number(e.target.attributes.array.nodeValue);
    let position = Number(e.target.attributes.position.nodeValue);
    let myArr = board.slice();

    if (myArr[array][position][0] === "empty") {
      if (whosTurn === false) {
        myArr[array][position][0] = "circle";
        let myPiece = new Piece(
          myArr[array][position][1],
          board[array][position][2],
          board[array][position][0]
        );
        game.addPiece(myPiece);

        setBoard(myArr);
        setWhosTurn(true);

        if (game.getWinner() === true) {
          alert("Circle Won!");
          startGame();
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
          alert("Cross Won!");
          startGame();
        }
      }
      if (game.getWinner() === "draw") {
        alert("Its a draw!");
        startGame();
      }
    }
  };

  let [whosTurn, setWhosTurn] = React.useState(false);
  let [board, setBoard] = React.useState([]);
  let [inputValue, setInputValue] = React.useState();
  let [inputValueWin, setInputValueWin] = React.useState();
  let [isDisabled, setisDisabled] = React.useState(false);
  let [maxLinesToWin, setMaxLinesToWin] = React.useState([]);

  return (
    <div className="column">
      Select Board Size: 1 - 20
      <input
        onChange={inputFunctionWin}
        value={inputValueWin}
        disabled={isDisabled}
      />
      <button onClick={selectBoardSize}>Select</button>
      <button onClick={restartGame}>Restart Game</button>
      {maxLinesToWin.map((x) => (
        <div>
          <input
            onChange={inputFunction}
            value={inputValue}
            disabled={isDisabled}
          />
          Select Win Condition: 1 - {x.toString()}
          <button onClick={startGame}>Start Game</button>
        </div>
      ))}
      <div className="board">
        {board.map((x) => (
          <div className="row">{testFunction(x)}</div>
        ))}
      </div>
    </div>
  );
}

export default GameDesk;
