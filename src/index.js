import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Game } from "./logic/Game";
import { Piece } from "./logic/Piece";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let game = new Game();
let piece = new Piece(0, 0, "cross");
let piece1 = new Piece(1, 0, "cross");
let piece2 = new Piece(2, 0, "cross");
game.addPiece(piece);
game.addPiece(piece1);
game.addPiece(piece2);
//console.log(game.pieces);
//console.log(game.getWinner());
