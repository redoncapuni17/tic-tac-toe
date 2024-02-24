import { useState } from "react";

function GameBoard({ onSelecteSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];

  //     updatedBoard[rowIndex][colIndex] = activePlayerSymnol;
  //     return updatedBoard;
  //   });
  //   onSelecteSquare();
  //};

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSimbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelecteSquare(rowIndex, colIndex)}
                  disabled={playerSimbol !== null}
                >
                  {playerSimbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
export default GameBoard;
