import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import List from "./List";
import Detail from "./Detail";
import NavbarHeader from "./components/Navbar";
import exampleData from "./exampleData";

class Routes extends React.PureComponent {
  state = {};
  componentWillMount() {
    this.setState({ searchData: exampleData });
  }
  render() {
    const shared = { searchData: this.state.searchData };
    return (
      <Router>
        <div>
          <NavbarHeader />

          <Route
            exact
            path="/"
            render={props => <App {...shared} {...props} />}
          />
          <Route
            path="/list"
            render={props => <List {...shared} {...props} />}
          />
          <Route
            path="/home"
            render={props => <App {...shared} {...props} />}
          />
          <Route
            path="/detail"
            render={props => <Detail {...shared} {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default Routes;
