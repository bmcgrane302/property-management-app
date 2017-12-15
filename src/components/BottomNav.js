import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class BottomNav extends Component {
  render () {
    return (
      <div style={{margin: 20}}>
        <Navbar color="faded" light>
           <NavbarBrand  className="mr-auto"><p>&#169; 2017</p></NavbarBrand>

         </Navbar>
      </div>
    )
  }
}

export default BottomNav
