import "./App.css";
import { Game } from "./logic/Game";
import { Piece } from "./logic/Piece";

function App() {
  let piece = new Piece(1, 2, "cross");
  console.log(piece.type);
  let piece2 = new Piece(2, 3, "circle");
  console.log(piece2.type);
  let game = new Game(2, 3, 4);
  console.log(game.pieces.slice());
  game.addPiece(piece2);
  console.log(game.pieces.slice());
  return "Hellow World";
}

export default App;
