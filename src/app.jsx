import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import status from "./helpers/Config";

const App = () => {
  const [gameStatus, setGameStatus] = useState(status.NOT_COMPLETED);

  const handleContinue = () => {
    window.location.reload();
  };

  let gameWonPlayer = "😁";
  if (gameStatus === status.X_WON) gameWonPlayer = "X";
  if (gameStatus === status.O_WON) gameWonPlayer = "O";

  return (
    <React.Fragment>
      {gameStatus === status.NOT_COMPLETED ? (
        <GameBoard onStatusChange={setGameStatus} />
      ) : (
        <div className="gameWonStatus">
          <div>{gameWonPlayer}</div>
          <span>{gameStatus === status.DRAW ? "draw" : "won"}</span>
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
