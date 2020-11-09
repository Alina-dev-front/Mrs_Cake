import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FAQ from './components/FAQ'; 
import UserDetails from './components/UserDetails'; 
import BakeryDetail from './components/BakeryDetail'; 
import ForgotPassword from './components/ForgotPassword';
import {BrowserRouter,  Route, Switch} from "react-router-dom";
import {HomePage} from './components/HomePage';
import shoppingCart from './components/shoppingCart';
import AboutUs from './components/AboutUs';
import ContaktUs from './components/ContaktUs';
import ProductTable from './components/ProductPage';
import ResetPassword from './components/ResetPassword';
import NavBar from './components/NavBar';
import CheckoutForm from "./components/CheckoutForm";
import { useCookies } from 'react-cookie';
import AdminPage from './components/AdminPage';
import BakeryPage from './components/BakeryPage';
import './App.css';
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
            <Route path='/Login' component={Login} />    
            <Route path='/SignUp' component={SignUp} /> 
            <Route path="/faq" component={FAQ} /> 
            <Route path="/UserDetails" component={UserDetails} />   
            <Route  path='/ForgotPassword' component={ForgotPassword}/>
            <Route path='/CheckOutForm' component={CheckoutForm} />
            <Route path="/BakeryDetail" component={BakeryDetail} /> 
            <Route path='/ForgotPassword' component={ForgotPassword}/>
            <Route path='/checkoutform' component={CheckoutForm} />
            <Route path='/ResetPassword' component={ResetPassword} />
            <Route path='/admin' component={AdminPage} />
            <Route path='/bakeryPage' component={BakeryPage} />
          </Switch> 
        </BrowserRouter>
    </React.Fragment>
    );
  }
  
export default App;
