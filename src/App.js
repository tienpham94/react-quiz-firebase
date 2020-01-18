import React from "react";
import {Route, BrowserRouter as Router} from 'react-router-dom'

import "./App.css";
import Home from './components/home'
import HighScore from './components/HighScore'
import Game from './components/Game'

function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/highscore" component={HighScore} />
    </Router>
    </div>
  );
}

export default App;
