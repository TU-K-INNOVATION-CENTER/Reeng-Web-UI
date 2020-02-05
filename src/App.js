import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../src/pages/SigninPage";
import CreateBell from "../src/pages/CreateBell";
import RegularBell from "../src/pages/RegularBell";
import ViewBells from "../src/pages/ViewBells";
import ImpromptuBell from "../src/pages/ImpromptuBell";


function App() {
  return (
    <Router>
    
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/create-bell" component={CreateBell} />
        <Route path="/set-regular-bell" component={RegularBell} />
        <Route path="/set-impromptu-bell" component={ImpromptuBell} />
        <Route path="/all-existing-bells" component={ViewBells} />
        
      </Switch>
      
    </Router>
  );
}

export default App;