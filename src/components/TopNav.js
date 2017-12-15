import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class TopNav extends Component {
  render () {
    return (
      <div style={{marginTop: 20, marginLeft: 90}}>
        <Navbar color="faded" light>
           <NavbarBrand href="/add" className="mr-auto navFont"><h2>Create Property</h2></NavbarBrand>
           <NavbarBrand href="/" className="mr-auto navFont"><h2>Home</h2></NavbarBrand>
           <NavbarBrand href="/pnl"  className="mr-auto navFont"><h2>Profit Loss</h2></NavbarBrand>
         </Navbar>
      </div>
    )
  }
}

export default TopNav
