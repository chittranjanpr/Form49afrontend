import React, { Component } from 'react';
import './Form1.css'
import "./Panmain.css";
// import Form1 from './Form1';
import Panmain from './Panmain.js';
// import Login from './login';
// import {BrowserRouter,Route} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Form from ".//Form";
import Form1 from "./Form1";

class App extends Component {
  render() {
    return (
   

      <Router>
      <div>
      <Route exact path="/" component={Panmain} />
      <Route path="/panform" component={Form1} />
      </div>
      </Router>

    );
  }
}

export default App;



