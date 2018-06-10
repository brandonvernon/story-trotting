import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import List from "./List";
import Detail from "./Detail";
import NavbarHeader from "./components/Navbar";
import { init, fetchPoints } from "./clearblade";
import Submission from "./components/Submission";
import ImageUpload from "./components/ImageUpload";

// import "clearblade-js-client";
// global ClearBlade
//const cb = new ClearBlade();
// var initOptions = {
//   URI: "https://platform.clearblade.com/",
//   messagingURI: "platform.clearblade.com/",
//   messagingPort: 8904,
//   useMQTT: true,
//   cleanSession: true,
//   systemKey: "cab9aab10bf6a58df1bd98c6bdc301",
//   systemSecret: "CAB9AAB10BF6A5D2D5D2BEF4B873"
// };

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
          <NavbarHeader {...shared} />
          <App {...shared} />
          <Route
            path="/list"
            render={props => <List {...shared} {...props} />}
          />
          <Route
            path="/detail"
            render={props => <Detail {...shared} {...props} />}
          />
          <div>
            <Route
              path="/new"
              render={props => <Submission {...shared} {...props} />}
            />
            <Route
              path="/new"
              render={props => <ImageUpload {...shared} {...props} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default Routes;
