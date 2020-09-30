import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HomePage} from './components/HomePage';
import {BakeryRegistration} from './components/BakeryRegistration';
import shoppingCart from './components/shoppingCart';
import AboutUs from './components/AboutUs';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/bakeryregistration' component={BakeryRegistration} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/shoppingcart" component={shoppingCart}/>
        
      </Switch>
    </BrowserRouter>
  
    );
  }

  
export default App;
