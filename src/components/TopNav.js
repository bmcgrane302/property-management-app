import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class TopNav extends Component {
  render () {
    return (
      <div>
        <Navbar color="faded" light>
           <NavbarBrand href="/add" className="mr-auto">Create Property</NavbarBrand>
           <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
           <NavbarBrand href="/pnl"  className="mr-auto">Profit Loss</NavbarBrand>
         </Navbar>
      </div>
    )
  }
}

export default TopNav
