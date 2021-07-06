import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./Components/Game";
import PlayerForm from "./Components/PlayerForm";

function App() {
  const [playerName, setPlayerName] = useState({
    Player1: "",
    Player2: "",
  });
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={(routeProps) => (
            <PlayerForm
              {...routeProps}
              playerName={playerName}
              setPlayerName={setPlayerName}
            />
          )}
        />
        <Route
          path="/game"
          component={(routeProps) => (
            <Game
              {...routeProps}
              playerName={playerName}
              setPlayerName={setPlayerName}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
