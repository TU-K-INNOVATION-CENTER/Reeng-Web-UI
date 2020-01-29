import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../src/pages/SigninPage";


function App() {
  return (
    <Router>
    
      <Switch>
        <Route exact path="/" component={SignIn} />
        
      </Switch>
      
    </Router>
  );
}

export default App;