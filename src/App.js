import React, { Component } from "react";
import Map from "./Map";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `75vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          searchData={this.props.searchData}
        />
      </div>
    );
  }
}

export default App;
