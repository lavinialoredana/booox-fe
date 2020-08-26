import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

//  Navigation Menu

export class NavigationBar extends Component{
  render(){
    return(
      <Navbar bg="yellow" expand="lg">
        <Navbar.Toggle aria-control="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/">
            BookUpload
          </NavLink>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/books">
            Books
          </NavLink>
          <NavLink className="d-inline p-2 bg-dark text-white" to="/authors">
            Authors
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;

