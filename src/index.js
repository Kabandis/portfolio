import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./index.scss"
import Auxiliary from "./helpers/Auxiliary"

import TopBar from "./components/NavBar/TopBar"
import Routes from "./constants/Routes"

const App = () => {
  return (
    <Auxiliary>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </Auxiliary>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));