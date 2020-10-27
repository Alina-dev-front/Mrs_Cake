import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import cake from '../cake.svg';
import search1 from '../search1.svg';
import shoppingCart from '../ShoppingCart.png';
import { Link } from 'react-router-dom';
import userprofile from '../userprofile.svg';
import {connect} from 'react-redux';

function NavBar({cartLength}) {
  return <Navbar fixed="top" bg="light" variant="light">
        <Navbar.Brand href="/">
      <img
        src={cake}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Mrs_Cake logo"
      />
    </Navbar.Brand>
     
      <Nav.Link as={Link} to="/">MRS CAKE</Nav.Link>
  <Nav className="mr-auto">
  <NavDropdown title="Products" id="basic-nav-dropdown">
          <div className="basic-nav-dropdown">
    {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="first"
        title={` By taste `}
      >
        <Dropdown.Item eventKey="1">Chocolate cakes</Dropdown.Item>
        <Dropdown.Item eventKey="2">Vanila and caramel cakes</Dropdown.Item>
        <Dropdown.Item eventKey="3">Princess cake</Dropdown.Item>
        <Dropdown.Item eventKey="4">Sandwich cakes</Dropdown.Item>
        <Dropdown.Item eventKey="5">Gluten-free and healthy cakes</Dropdown.Item>
        <Dropdown.Item eventKey="6">Fruit and berries cakes</Dropdown.Item>
      </DropdownButton>
    ))}
  </div>
  <div className="basic-nav-dropdown">
    {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="first"
        title={` By occasion `}
      >
        <Dropdown.Item eventKey="7">Wedding cakes</Dropdown.Item>
        <Dropdown.Item eventKey="8">Birthday cakes</Dropdown.Item>
        <Dropdown.Item eventKey="9">Corporate cakes</Dropdown.Item>
      </DropdownButton>
    ))}
  </div>
  <div className="basic-nav-dropdown">
    {['right'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="first"
        title={` By form `}
      >
        <Dropdown.Item eventKey="10">Cakes</Dropdown.Item>
        <Dropdown.Item eventKey="11">Cupcakes</Dropdown.Item>
        <Dropdown.Item eventKey="12">Cookies</Dropdown.Item>
        <Dropdown.Item eventKey="13">Donuts</Dropdown.Item>
        <Dropdown.Item eventKey="14">Pies</Dropdown.Item>
        <Dropdown.Item eventKey="15">Macarons</Dropdown.Item>
      </DropdownButton>
    ))}
  </div>
  <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/productpage">Show all products</NavDropdown.Item>
  </NavDropdown>
    <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
    <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-primary"><img src={search1} alt="search button" width="25" height="25" /></Button><br/><br/><br/>
  </Form><br/><br/>
 <br/> <Navbar.Brand href="/userdetails">
      <img
        src={userprofile}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="userprofile_a"
      />
    </Navbar.Brand><br/>
    <Nav.Link as={Link} to="/login"><b>Sign in</b></Nav.Link>
    <Nav.Link as={Link} to="/login"><b>Sign out</b></Nav.Link>
    <Nav.Link as={Link} to="/shoppingCart" className="fa fa-shopping-cart mr-2"> <img 
          width="23px"
          height="23px" src={shoppingCart} alt="shopping cart"
          /> ({cartLength})</Nav.Link>
 
       
        
</Navbar>
}

const mapStateToProps = (state) => {
  return {
    cartLength: state.shop.cart.length
  }
};
export default connect(mapStateToProps, null)(NavBar);
