import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HomePage} from './components/HomePage';
import {BakeryRegistration} from './components/BakeryRegistration';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/bakeryregistration' component={BakeryRegistration}/>
      </Switch>
    </BrowserRouter>

  );
}
export default App;
