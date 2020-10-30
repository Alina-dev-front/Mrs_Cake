import React, { useEffect, useState } from 'react';
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
import ResetPassword from './components/ResetPassword';
import NavBar from './components/NavBar';
import CheckoutForm from "./components/CheckoutForm";
// import { USERS_API_URL } from './constants/user_api_url';
import './App.css';

function App() {

  // const [role, setRole] = useState("")
  // const user = {}

  // useEffect(() => {

  // }, [])

  // getusers = () => {
  //   fetch(`${USERS_API_URL}`)
  //     .then(response => {
  //       var dbResponse = response.json();
  //       return dbResponse;
  //   })
  //     .then(userData => this.setRole(userData.userRole))
  //     .catch(err => console.log(err));
  // }


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
            <Route path='/ResetPassword' component={ResetPassword} />
          </Switch> 
        </BrowserRouter>
    </React.Fragment>
    );
  }
  
export default App;
