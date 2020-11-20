import "./App.css";
import { TicTacToe } from "./logic/TicTacToe";
import { Piece } from "./logic/Piece";
import GameDesk from "./GameDesk";

function App() {
  let piece = [];
  let myFunction = () => {
    piece.push(new Piece(1, 2, "cross"));
    console.log(piece);
  };
  return (
    <div>
      <button onClick={myFunction}></button>
      <GameDesk />
    </div>
  );
}

export default App;
