import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard'; 
import ForgotPassword from './components/ForgotPassword';
import './components/Dashboard.css';
import {BrowserRouter,  Route, Switch} from "react-router-dom";
import {HomePage} from './components/HomePage';
import shoppingCart from './components/shoppingCart';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ProductTable from './components/ProductPage';
import NavBar from './components/NavBar';
import FooterPage from './components/Footer';
import CarouselControlled from "./components/Carrousel";
import './App.css';
function App() {
  return (
    <React.Fragment>
    <NavBar />
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/shoppingcart" component={shoppingCart} />
        <Route path="/productpage" component={ProductTable} />
        <Route path="/homepage" component={CarouselControlled}/>
        <div className="container">    
        <nav classN-ame="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
              <a class="nav-link" href="Login">Login</a>   
              </li>    
              <li className="nav-item">    
              
              <a class="nav-link" href="Signup">SignUp</a> 
              </li>      
            </ul>    
          </div>
         
           
        </nav> <br />  
        </div>
      </Switch> 
      
        <Switch>    

        <Route  path='/ForgotPassword' component={ForgotPassword}/>
          <Route  path='/Login' component={Login} />    
          <Route path='/SignUp' component={SignUp} />    
          <Route exact path="/" component={Login} />
        <Route path="/HomePage" component={HomePage} />
        </Switch>    
        <Switch>  
        <Route path='/Dashboard' component={Dashboard} />    
        </Switch>  
    </BrowserRouter>
   
    
          
     
     
    <FooterPage />
    </React.Fragment>

    );
  }


  
export default App;
