import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HomePage} from './components/HomePage';
import {BakeryRegistration} from './components/BakeryRegistration';
import shoppingCart from './components/shoppingCart';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ShowProductList from './components/ProductPage';
import './App.css';
import CarouselControlled from "./components/Carrousel";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/bakeryregistration' component={BakeryRegistration} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/shoppingcart" component={shoppingCart} />
        <Route path="/productpage" component={ShowProductList} />
        <Route path="/homepage" component={CarouselControlled}/>
      </Switch>
    </BrowserRouter>
    );
  }


  
export default App;
