import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
  <Router>
    <div>
      <nav>
      </nav>
      <Switch>
        <Route path="/SignIn">
        <SignIn/>
        </Route>
        <Route path="/SignUp">
        <SignUp/>
        
        </Route>
      </Switch>
    </div>
  </Router>
    );
  
  }

  
export default App;