import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import List from "./List";
import Detail from "./Detail";
import NavbarHeader from "./components/Navbar";
import { init, fetchPoints } from "./clearblade";
import Submission from "./components/Submission";
import ImageUpload from "./components/ImageUpload";

import "clearblade-js-client";
/*global ClearBlade*/
const cb = new ClearBlade();
var initOptions = {
  URI: "https://hackforchange.clearblade.com/",
  messagingURI: "hackforchange.clearblade.com/",
  messagingPort: 8904,
  useMQTT: true,
  cleanSession: true,
  systemKey: "e0a195b10b9cedb6cceebd87d9e101",
  systemSecret: "E0A195B10BF4E79FB3BC86F7C4E801"
};

class Routes extends React.PureComponent {
  state = { searchData: {} };
  componentWillMount() {
    init().then(res => {
      this.searchLocalPoints({ lat: 30.2297224, long: -97.7560469 });
    });
  }
  searchLocalPoints = query => {
    fetchPoints(query).then(res => {
      this.setState({ searchData: res });
    });
  };
  render() {
    const shared = {
      searchData: this.state.searchData,
      searchLocalPoints: this.searchLocalPoints
    };
    return (
      <Router>
        <div>
          <NavbarHeader />
           <App {...shared}/>
          <Route
            path="/list"
            render={props => <List {...shared} {...props} />}
          />

          <Route
            path="/detail"
            render={props => <Detail {...shared} {...props} />}
          />

          <Route
            path="/new"
            render={props => <Submission {...shared} {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default Routes;
