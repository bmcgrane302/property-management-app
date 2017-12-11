import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class TopNav extends Component {
  render () {
    return (
      <div>
        <Navbar color="faded" light>
           <NavbarBrand href="/" className="mr-auto">APP NAME</NavbarBrand>
            <h4>DATE</h4>
         </Navbar>
      </div>
    )
  }
}

export default TopNav
