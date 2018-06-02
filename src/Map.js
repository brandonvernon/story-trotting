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

const Map = compose(
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
  withGoogleMap,
  withRouter
)(props => {
  debugger;
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: exampleData.sainteds.lat,
        lng: exampleData.sainteds.lng
      }}
    >
      {Object.values(exampleData).map(mk => (
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

export default Map;
