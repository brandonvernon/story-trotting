import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  FormGroup,
  FormControl,
  MenuItem,
  NavDropdown
} from "react-bootstrap";
import MediaQuery from "react-responsive";
import "./Navbar.css";
import { Link } from "react-router-dom";

class NavbarHeader extends Component {
  render() {
    return (
      <div>
        <MediaQuery minWidth={450} maxWidth={1800}>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/home">Story Strotting</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl type="text" placeholder="Search" />
                </FormGroup>{" "}
                {/* <Button type="submit">Submit</Button> */}
              </Navbar.Form>
            </Navbar.Header>
            <Navbar.Collapse className="nav-sandwich">
              <Nav>
                <NavItem eventKey={1}>
                  <Link to="/list">List View</Link>
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavDropdown
                  eventKey={3}
                  title="Actions"
                  id="basic-nav-dropdown"
                >
                  <MenuItem eventKey={3.1}>Add a Story</MenuItem>
                  <MenuItem eventKey={3.2}>Filters</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </MediaQuery>
        <MediaQuery maxWidth={450}>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{" "}
            {/* <Button type="submit">Submit</Button> */}
          </Navbar.Form>
          <Navbar fixedBottom>
            <Nav pullLeft>
              <NavItem eventKey={1} href="#">
                List View
              </NavItem>
              <NavItem eventKey={1} href="#">
                Filters
              </NavItem>
              <NavItem eventKey={1} href="#">
                +Add Story
              </NavItem>
            </Nav>
          </Navbar>
        </MediaQuery>
      </div>
    );
  }
}

export default NavbarHeader;
