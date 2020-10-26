import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserDetails from './components/UserDetails'; 
import ForgotPassword from './components/ForgotPassword';
import {BrowserRouter,  Route, Switch} from "react-router-dom";
import {HomePage} from './components/HomePage';
import shoppingCart from './components/shoppingCart';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ProductTable from './components/ProductPage';
import NavBar from './components/NavBar';
//import CarouselControlled from "./components/Carrousel";
import CheckoutForm from "./components/CheckoutForm";

import './App.css';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/shoppingcart" component={shoppingCart} />
            <Route path="/productpage" component={ProductTable} />
           
            <Route  path='/Login' component={Login} />    
            <Route path='/SignUp' component={SignUp} /> 
            <Route path="/UserDetails" component={UserDetails} />   
            <Route  path='/ForgotPassword' component={ForgotPassword}/>
            <Route path='/checkoutform' component={CheckoutForm} />
          </Switch> 
        </BrowserRouter>
    </React.Fragment>
    );
  }
  
export default App;
