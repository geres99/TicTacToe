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
      let piecesOnWinningPositionsxy = [];
      let piecesOnWinningPositionsyx = [];
      let piece = this.pieces[i];
      for (let v = 0; v < this.pieces.length; v++) {
        if (this.pieces[v] !== undefined) {
          //////// x
          if (piece.type === this.pieces[v].type) {
            for (let p = 0; p < pointsToWin; p++) {
              if (
                piece.y + p === this.pieces[v].y &&
                piece.x === this.pieces[v].x
              ) {
                piecesOnWinningPositionsx.push(piece);
              }
            }
          }
          //////// y
          if (piece.type === this.pieces[v].type) {
            for (let p = 0; p < pointsToWin; p++) {
              if (
                piece.x + p === this.pieces[v].x &&
                piece.y === this.pieces[v].y
              ) {
                piecesOnWinningPositionsy.push(piece);
              }
            }
          }
          //////// x+y+
          if (piece.type === this.pieces[v].type) {
            for (let p = 0; p < pointsToWin; p++) {
              if (
                piece.x + p === this.pieces[v].x &&
                piece.y + p === this.pieces[v].y
              ) {
                console.log(this.pieces[v].type);
                piecesOnWinningPositionsyx.push(piece);
              }
            }
          }
          //////// y-x+
          if (piece.type === this.pieces[v].type) {
            for (let p = 0; p < pointsToWin; p++) {
              if (
                piece.x + p === this.pieces[v].x &&
                piece.y - p === this.pieces[v].y
              ) {
                console.log(this.pieces[v].type);
                piecesOnWinningPositionsxy.push(piece);
              }
            }
          }
        }
      }
      if (piecesOnWinningPositionsx.length === pointsToWin) {
        return true;
      }
      if (piecesOnWinningPositionsy.length === pointsToWin) {
        return true;
      }
      if (piecesOnWinningPositionsyx.length === pointsToWin) {
        return true;
      }
      if (piecesOnWinningPositionsxy.length === pointsToWin) {
        return true;
      }
    }
    return false;
  }
}
