import React from "react";
import {Route, BrowserRouter as Router} from 'react-router-dom'

import "./App.css";
import Home from './components/home'

function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" component={Home} />
      <Route path="/" component={Game} />
      <Route path="/" component={HighScore} />
    </Router>
    </div>
  );
}

export default App;
