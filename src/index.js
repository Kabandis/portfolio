import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./styles/index.scss"
import Auxiliary from "./js/hoc/Auxiliary"


import TopBar from "./js/components/TopBar"
import Routes from "./js/routes/Routes"

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