export class Game {
  maxX = 3;
  maxY = 3;
  pieces = [];

  addPiece(piece) {
    if (!["circle", "cross", "square"].includes(piece.type)) {
      throw new Error("Type is spelled wrong");
    }
    if (this.pieces.some((x) => x.x === piece.x && x.y === piece.y)) {
      throw new Error("You put element on taken spot");
    }
    this.pieces.push(piece);
  }

  getWinner() {
    for (let i = 0; i < this.pieces.length; i++) {
      let pointsToWin = 4;
      let piecesOnWinningPositionsx = [];
      let piecesOnWinningPositionsy = [];
      let piece = this.pieces[i];
      for (let v = 0; v < this.pieces.length; v++) {
        if (this.pieces[v] !== undefined) {
          //////// x
          if (
            piece.type === this.pieces[v].type &&
            piece.x === this.pieces[v].x
          ) {
            for (let p = 0; p < pointsToWin; p++) {
              if (piece.y + p === this.pieces[v].y) {
                console.log(this.pieces[v].type);
                piecesOnWinningPositionsx.push(piece);
              }
            }
          }
          //////// y
          if (
            piece.type === this.pieces[v].type &&
            piece.y === this.pieces[v].y
          ) {
            for (let p = 0; p < pointsToWin; p++) {
              if (piece.x + p === this.pieces[v].x) {
                console.log(this.pieces[v].type);
                piecesOnWinningPositionsy.push(piece);
              }
            }
          }
          //////// xy

          //////// yx
        }
      }
      if (piecesOnWinningPositionsx.length === pointsToWin) {
        return true;
      }
      if (piecesOnWinningPositionsy.length === pointsToWin) {
        return true;
      }
    }
    return false;
  }
}
