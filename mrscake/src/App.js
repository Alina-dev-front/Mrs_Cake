import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HomePage} from './components/HomePage';
import {BakeryRegistration} from './components/BakeryRegistration';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/bakeryregistration' component={BakeryRegistration} />
    
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        
      </Switch>
    </BrowserRouter>
  
    );
  }

  
export default App;
