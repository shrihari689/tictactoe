import React from "react";

const Entry = ({ entry, onClick, rowIndex, colIndex }) => {
  return (
    <div
      className={entry === "O" ? "computer" : ""}
      onClick={() => onClick(rowIndex, colIndex)}
    >
      {entry}
    </div>
  );
};

export default Entry;
