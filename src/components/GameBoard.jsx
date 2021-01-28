import React, { useState } from "react";
import Entry from "./Entry";
import "../gameBoard.css";
import "../app.css";
import checkForWin from "./../helpers/Utils";

const GameBoard = ({ onWin }) => {
  const [entries, setEntries] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [turn, setTurn] = useState("X");

  const handleClick = (row, col) => {
    const newEntires = [...entries];
    if (newEntires[row][col]) return;
    newEntires[row][col] = turn;
    setEntries(newEntires);
    if (checkForWin(newEntires)) return onWin(turn);
    if (newEntires.every((row) => row.every((col) => col !== "")))
      return onWin(-1);
    const nextTurn = turn === "X" ? "O" : "X";
    setTurn(nextTurn);
  };

  return (
    <React.Fragment>
      <h1 className="gameTurnTitle">{turn}'s Turn</h1>
      <div className="gameBoard">
        {entries.map((row, rowIndex) => {
          return row.map((col, colIndex) => {
            return (
              <Entry
                key={`${rowIndex}${colIndex}`}
                onClick={handleClick}
                rowIndex={rowIndex}
                colIndex={colIndex}
                entry={col}
              />
            );
          });
        })}
      </div>
    </React.Fragment>
  );
};

export default GameBoard;
