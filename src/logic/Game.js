export class Game {
  maxX = 3;
  maxY = 3;
  lineLength = 3;
  pieces = [];

  constructor(maxX, maxY, lineLength) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.lineLength = lineLength;
  }

  addPiece(piece) {
    if (piece.x >= this.maxX || piece.x < 0) {
      throw new Error("X is too big or too small");
    }
    if (piece.y >= this.maxY || piece.y < 0) {
      throw new Error("Y is too big or too small");
    }
    if (!["circle", "cross"].includes(piece.type)) {
      throw new Error("Type is spelled wrong");
    }
    if (this.pieces.some((x) => x.x === piece.x && x.y === piece.y)) {
      throw new Error("You put element on taken spot");
    }
    this.pieces.push(piece);
  }
}
