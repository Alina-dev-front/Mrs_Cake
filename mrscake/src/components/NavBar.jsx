import React from 'react';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown,NavItem} from 'react-bootstrap';
import cake from '../cake.svg';
import search1 from '../search1.svg';
import shoppingCart from '../ShoppingCart.png';
import { Link } from 'react-router-dom';
import userprofile from '../userprofile.svg';
import {connect} from 'react-redux';
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import bakeryprofile from '../bakeryprofile.svg';
import { LOGOUT_API_URL } from '../constants/api_url_path';

function NavBar({cartLength}) {
  let userRole = Cookies.get('role');
  let userId = Cookies.get('user_id');

  function ShowUserDetailsSign() {
    if(userId == null || userId === "") {
      return null;
    } else {
      if(userRole === 'Customer') {
        return <NavDropdown 
        title={
          <img src={userprofile}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="userprofile_a"/>   
        } 
        id="basic-nav-dropdown">
        <Nav.Link as={Link} to="/userdetails">
          <NavItem style={{color: "black" }}>User Profile</NavItem>
          </Nav.Link>
          <Nav.Link as={Link} to="/ViewOrderPage">
          <NavItem style={{color: "black" }}>View Orders</NavItem>
          </Nav.Link>
      </NavDropdown>
      } else if (userRole === 'BakeryOwner'){
        return <Nav.Link as={Link} to="/bakerypage">
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
  }

  const [cookies, setCookie] = useCookies(['name']);
  const history = useHistory();

  function SwitchSignInSignOut() {
    if(userId == null || userId === "") {
      return <Nav.Link as={Link} to="/login"><b>Sign in</b></Nav.Link>
    }
    return <Nav.Link as={Link} to="/" onClick={() => SignOut(history, setCookie)} ><b>Sign out</b></Nav.Link>
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
    <Nav.Link as={Link} to="/bakeryFilter" style={{display: userRole === 'BakeryOwner' ? '' : 'none'}}>Bakery</Nav.Link>
    <Nav.Link as={Link} to="/admin" style={{display: userRole === 'Admin' ? '' : 'none'}}>Admin</Nav.Link>
    <Form inline style={{marginLeft:"30%"}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary"><img src={search1} alt="search button" width="25" height="25" /></Button>
    <ShowUserDetailsSign />
    <SwitchSignInSignOut />
    <Nav.Link as={Link} to="/shoppingCart" className="fa fa-shopping-cart mr-2"> <img 
          width="23px"
          height="23px" src={shoppingCart} alt="shopping cart"
          /> ({cartLength})</Nav.Link>
    </Form>
</Navbar>
}

function SignOut(history, setCookie) {
  fetch(`${LOGOUT_API_URL}`, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        id: Cookies.get('user_id'),
    })
  })
  .then(() => {
    setCookie('role', "Customer", { path: '/' });
    setCookie('user_id', "", { path: '/' });

    history.push("/");
    window.location.reload(true);
  })
}

const mapStateToProps = (state) => {
  return {
    cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, null)(NavBar);
