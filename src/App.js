import React, { Component } from "react";
const { compose, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require("react-google-maps");

const myMarkers = {
  sainteds: {
    lat: 30.2297224,
    lng: -97.7560469,
    address: "109 E 5th, Austin, TX",
    collection: '["Willie Nelson"]',
    description: "Longer desc for willi",
    id: "sainteds",
    images: "WyJhYXNkYXNkYSJd",
    location_name: "Austin, TX",
    name: "alamo drafthouse",
    owner: "rreinold@gmail.com",
    sources: '["nbc.org"]',
    tags: '["music","film"]',
    timestamp: "2010-01-01T00:00:00Z",
    timestamp_end: "2011-01-01T00:00:00Z"
  },
  alamo: {
    lat: 30.248499,
    lng: -97.771849,
    address: "109 E 5th, Austin, TX",
    collection: '["Willie Nelson"]',
    description: "Longer desc for willi",
    id: "alamo",
    images: "WyJhYXNkYXNkYSJd",
    location_name: "Austin, TX",
    name: "sainteds: Willie Nelson's Hangout",
    owner: "rreinold@gmail.com",
    sources: '["nbc.org"]',
    tags: '["music","film"]',
    timestamp: "2010-01-01T00:00:00Z",
    timestamp_end: "2011-01-01T00:00:00Z"
  }
};

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(
    () => ({
      selected: false
    }),
    {
      onToggleOpen: () => ({ selected }) => {
        return {
          selected
        };
      }
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: myMarkers.sainteds.lat,
        lng: myMarkers.sainteds.lng
      }}
    >
      {Object.values(myMarkers).map(mk => (
        <Marker
          key={`${mk.lat}${mk.lng}`}
          position={{ lat: mk.lat, lng: mk.lng }}
          onClick={() => props.onToggleOpen({ selected: mk.id })}
        >
          {props.selected === mk.id ? (
            <InfoWindow>
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
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Story Trotting</h1>
        </header>
        <MapWithAMakredInfoWindow
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <p className="App-intro">Container for our app.</p>
      </div>
    );
  }
}

export default App;
