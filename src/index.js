import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import "./styles/index.scss"

import TopBar from "./js/components/TopBar"
import Routes from "./js/routes/Routes"

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));