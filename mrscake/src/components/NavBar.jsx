import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';

function NavBar() {
  return <Navbar fixed="top" bg="light" variant="light">
      <Navbar.Brand href="#home">MRS CAKE</Navbar.Brand>
  <Nav className="mr-auto">
    <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item>By taste</NavDropdown.Item>
        <NavDropdown.Item>By occasion</NavDropdown.Item>
        <NavDropdown.Item>By form</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Show all products</NavDropdown.Item>
      </NavDropdown>
    <Nav.Link href="">Join Us</Nav.Link>
    <Nav.Link href="">Contact Us</Nav.Link>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-primary">Search</Button>
  </Form>
  <Button>Sign In</Button>
</Navbar>
}

export default NavBar;