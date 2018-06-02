import React, { Component } from "react";
import exampleData from "./exampleData";
import { compose, withStateHandlers } from "recompose";
import { withRouter } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
const queryString = require("query-string");

class MyGoogleMap extends React.PureComponent {
  state = {
    isOpen: true
  };
  onClick = ({ selected }) => {
    this.onToggleOpen({ isOpen: true });
    this.props.history.push(`?${queryString.stringify({ id: selected })}`);
  };
  onToggleOpen = ({ isOpen }) => {
    this.setState({ isOpen });
  };

  render() {
    const props = this.props;
    const { id } = queryString.parse(props.location.search);
    const selectedPoint = exampleData[id];
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{
          lat: selectedPoint.lat,
          lng: selectedPoint.lng
        }}
      >
        {Object.values(exampleData).map(mk => (
          <Marker
            key={`${mk.lat}${mk.lng}`}
            position={{ lat: mk.lat, lng: mk.lng }}
            onClick={() => this.onClick({ selected: mk.id })}
          >
            {this.state.isOpen && mk.id === selectedPoint.id ? (
              <InfoWindow onClick={() => this.onToggleOpen({ isOpen: false })}>
                <div>
                  <h1>{mk.name}</h1>
                  <div>{mk.description}</div>
                </div>
              </InfoWindow>
            ) : (
              ""
            )}
          </Marker>
        ))}
      </GoogleMap>
    );
  }
}

const Map = compose(withScriptjs, withGoogleMap, withRouter)(props => {
  return <MyGoogleMap {...props} />;
});

export default Map;
