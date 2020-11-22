export class Game {
  maxX = 3;
  maxY = 3;
  pieces = [];

  addPiece(piece) {
    if (piece.x >= this.maxX || piece.x < 0) {
      throw new Error("X is too big or too small");
    }
    if (piece.y >= this.maxY || piece.y < 0) {
      throw new Error("Y is too big or too small");
    }
    if (!["circle", "cross", "square"].includes(piece.type)) {
      throw new Error("Type is spelled wrong");
    }
    if (this.pieces.some((x) => x.x === piece.x && x.y === piece.y)) {
      throw new Error("You put element on taken spot");
    }
    this.pieces.push(piece);
  }

  getWinner() {
    for (let piece of this.pieces) {
    }
    for (let i = 0; i < this.pieces.length; i++) {
      let piece = this.pieces[i];
      let winningPositions = [
        { x: piece.x - 2, y: piece.y },
        { x: piece.x - 1, y: piece.y },
        { x: piece.x + 1, y: piece.y },
        { x: piece.x + 2, y: piece.y },
      ];

      let piecesOnWinningPositions = this.pieces
        .filter((x) => winningPositions.some((y) => x.x === y.x && x.y === y.y))
        .filter((x) => x.type === piece.type);

      if (piecesOnWinningPositions.length === 2) {
        return true;
      }
    }
    return false;
  }
}
