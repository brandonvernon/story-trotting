import React, { Component } from "react";
import "./App.css";

import { GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
);

// <MyMapComponent isMarkerShown />// Map with a Marker
// <MyMapComponent isMarkerShown={false} />// Just only Map

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Story Trotting</h1>
        </header>
        <MyMapComponent isMarkerShown />
        <p className="App-intro">Container for our app.</p>
      </div>
    );
  }
}

export default App;
