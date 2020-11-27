import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FAQ from './components/FAQ'; 
import ViewOrderPage from './components/ViewOrderPage';  
import ForgotPassword from './components/ForgotPassword';
import {BrowserRouter,  Route, Switch} from "react-router-dom";
import {HomePage} from './components/HomePage';
import shoppingCart from './components/shoppingCart';
import AboutUs from './components/AboutUs';
import ContaktUs from './components/ContaktUs';
import ProductTable from './components/ProductPage';
import ResetPassword from './components/ResetPassword';
import NavBar from './components/NavBar2';
import CheckoutForm from "./components/CheckoutForm";
import { useCookies } from 'react-cookie';
import AdminPage from './components/AdminPage';
import BakeryFilter from './components/BakeryFilter';
import BakeryPage from './components/BakeryPage';
import Greetings from './components/greetings'
import UserDetails from './components/UserDetails'

import './App.css';
import FooterPage from './components/Footer';
//import orders from './components/orders';

function App() {
  const [cookies, setCookie] = useCookies(['name']);
  
  function SetDefaultCookie() {
    if(cookies.role === null || cookies.role === undefined) {
      setCookie('role', "Customer", { path: '/' });
    }
    return '';
  }

  return (
    <React.Fragment>
        <BrowserRouter>
        <SetDefaultCookie />
        <NavBar />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contaktus" component={ContaktUs} />
            <Route path="/shoppingcart" component={shoppingCart} />
            <Route path="/productpage" component={ProductTable} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} /> 
            <Route path="/faq" component={FAQ} /> 
            <Route path="/vieworderpage" component={ViewOrderPage} /> 
            <Route path="/userdetails" component={UserDetails} />   
            <Route  path='/forgotpassword' component={ForgotPassword}/>
            <Route path='/CheckOutForm' component={CheckoutForm} />
            <Route path='/checkoutform' component={CheckoutForm} />
            <Route path='/resetpassword' component={ResetPassword} />
            <Route path='/admin' component={AdminPage} />
            <Route path='/bakeryfilter' component={BakeryFilter}/>
            <Route path='/bakeryPage' component={BakeryPage}/>
            <Route path='/greetings' component={Greetings}/>
          </Switch> 
          
        </BrowserRouter>
        <BrowserRouter><FooterPage/></BrowserRouter>
    </React.Fragment>
    );
  }
  
export default App;
