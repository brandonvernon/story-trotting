import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  FormGroup,
  FormControl,
  Button,
  MenuItem,
  NavDropdown
} from 'react-bootstrap';
import './Navbar.css';

class NavbarHeader extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Story Strotting</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search"/>
            </FormGroup>{' '} {/* <Button type="submit">Submit</Button> */}
          </Navbar.Form>
        </Navbar.Header>
        <Navbar.Collapse className="nav-sandwich">
          <Nav>
            <NavItem eventKey={1} href="#">
              List View
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Actions" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Add a Story</MenuItem>
              <MenuItem eventKey={3.2}>Filters</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarHeader;
