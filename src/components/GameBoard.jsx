import React, { useState } from "react";
import Entry from "./Entry";
import "../gameBoard.css";
import "../app.css";
import checkForWin from "./../helpers/Utils";
import status from "./../helpers/Config";

const GameBoard = ({ onStatusChange }) => {
  const [entries, setEntries] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [turn, setTurn] = useState("X");

  const handleClick = (row, col) => {
    const newEntires = [...entries];
    // Don't Update if already the place is filled
    if (newEntires[row][col]) return;

    newEntires[row][col] = turn;
    setEntries(newEntires);

    // Check for winning across all cells
    if (checkForWin(newEntires)) {
      const gameStatus = turn === "X" ? status.X_WON : status.O_WON;
      return onStatusChange(gameStatus);
    }

    // If it's not won, then check all entries are filled up
    if (newEntires.every((row) => row.every((col) => col !== "")))
      return onStatusChange(status.DRAW);

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
