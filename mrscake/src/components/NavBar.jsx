import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import cake from '../cake.svg';
import search1 from '../search1.svg';
import shoppingCart from '../ShoppingCart.png';
import { Link } from 'react-router-dom';
import userprofile from '../userprofile.svg';
import {connect} from 'react-redux';
import Cookies from 'js-cookie';


function NavBar({cartLength}) {
  let display = ""
    let userRole = Cookies.get('role');
    if(userRole === 'Customer') {
      display = 'none'
    }
    let displayVariable = { display: display }
  return <Navbar fixed="top" bg="light" variant="light">
        <Nav.Link as={Link} to="/" >
      <img
        src={cake}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Mrs_Cake logo"
      />
    </Nav.Link>
    <Nav.Link as={Link} to="/">MRS CAKE</Nav.Link>
    <Nav.Link as={Link} to="/productpage">Products</Nav.Link>
    <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
    <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
    <Nav.Link as={Link} to="/admin" style={displayVariable}>Admin</Nav.Link>
    <Form inline style={{marginLeft:"30%"}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary"><img src={search1} alt="search button" width="25" height="25" /></Button>
    <Nav.Link as={Link} to="/userdetails">
      <img
        src={userprofile}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="userprofile_a"
      />
    </Nav.Link>
    <Nav.Link as={Link} to="/login"><b>Sign in</b></Nav.Link>
    <Nav.Link as={Link} to="/login"><b>Sign out</b></Nav.Link>
    <Nav.Link as={Link} to="/shoppingCart" className="fa fa-shopping-cart mr-2"> <img 
          width="23px"
          height="23px" src={shoppingCart} alt="shopping cart"
          /> ({cartLength})</Nav.Link>
    </Form>
</Navbar>
}

const mapStateToProps = (state) => {
  return {
    cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, null)(NavBar);
