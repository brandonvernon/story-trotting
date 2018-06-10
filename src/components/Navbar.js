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
//import List from "../List.js";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import './Navbar.css'

class NavbarHeader extends Component {
  render() {
    const query = queryString.parse(this.props.location.search);
    const { collection } = query;
    // debugger;
    return (
      <div>
        <MediaQuery minWidth={450} maxWidth={1500}>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand className='Brand'>
                <Link to="/home">Story Trotting</Link>
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
                  <Link to={`/list${this.props.location.search}`}>
                    List View
                  </Link>
                </NavItem>
              </Nav>
              <Nav>
                <NavItem eventKey={1}>
                  {collection && (
                    <span>
                      {collection} <Link to="/">x clear</Link>
                    </span>
                  )}
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavDropdown
                  eventKey={3}
                  title="Actions"
                  id="basic-nav-dropdown"
                >
                  <MenuItem eventKey={3.1}>
                    <Link to="/new">Add a Story</Link>
                  </MenuItem>
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
          <Navbar collapseOnSelect fixedBottom>
            <Nav>
              <NavItem eventKey={1}>
                <Link to={`/list${this.props.location.search}`}>List View</Link>
              </NavItem>
              <NavItem eventKey={1} href="#">
                Filters
              </NavItem>
              <NavItem eventKey={1} href="#">
                <Link to="/new">Add a Story</Link>
              </NavItem>
            </Nav>
          </Navbar>
        </MediaQuery>
      </div>
    );
  }
}

export default withRouter(NavbarHeader);
