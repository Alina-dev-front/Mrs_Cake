import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import cake from '../cake.svg';
import search1 from '../search1.svg';
import shoppingCart from '../ShoppingCart.png';
import { Link } from 'react-router-dom';
import userprofile from '../userprofile.svg';
import bakeryprofile from '../bakeryprofile.svg';
import {connect} from 'react-redux';
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';


function NavBar({cartLength}) {
  let userRole = Cookies.get('role');

  function ShowUserDetailsSign() {
    if(userRole === 'Customer') {
      return <Nav.Link as={Link} to="/userdetails">
      <img
        src={userprofile}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="userprofile_a"
      />
    </Nav.Link>;
    } else if (userRole === 'BakeryOwner'){
      return <Nav.Link as={Link} to="/bakeryDetail">
      <img
        src={bakeryprofile}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="bakeryprofile_a"
      />
    </Nav.Link>;
    } else {
      return null;
    }
  }
  const [cookies, setCookie] = useCookies(['name']);
  function SignOut() {
    setCookie('role', "Customer", { path: '/' });
    window.location.reload(true);
  }

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
    <Nav.Link as={Link} to="/contaktus">Contact Us</Nav.Link>
    <Nav.Link as={Link} to="/admin" style={{display: userRole === 'Admin' ? '' : 'none'}}>Admin</Nav.Link>
    <Form inline style={{marginLeft:"30%"}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary"><img src={search1} alt="search button" width="25" height="25" /></Button>
    <ShowUserDetailsSign />
    <Nav.Link as={Link} to="/login"><b>Sign in</b></Nav.Link>
    <Nav.Link as={Link} to="/" onClick={() => SignOut()} ><b>Sign out</b></Nav.Link>
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
