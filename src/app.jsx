import React, { useState } from "react";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [isWon, setIsWon] = useState(false);

  const handleContinue = () => {
    window.location.reload();
  };

  return (
    <React.Fragment>
      {!isWon ? (
        <GameBoard onWin={setIsWon} />
      ) : isWon === -1 ? (
        <div className="gameWonStatus">
          <div>😁</div>
          <span>draw</span>
          <button onClick={handleContinue}>Continue</button>
        </div>
      ) : (
        <div className="gameWonStatus">
          <div>{isWon}</div>
          <span>won</span>
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
