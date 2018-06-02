import React from "react";
import exampleData, { defaultPoint } from "./exampleData";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import queryString from "query-string";

class MyGoogleMap extends React.PureComponent {
  state = {
    isOpen: true
  };
  onClick = ({ selected }) => {
    this.onToggleOpen({ isOpen: true });
    const query = queryString.parse(this.props.location.search);
    this.props.history.push(
      `?${queryString.stringify({ ...query, id: selected })}`
    );
  };
  onToggleOpen = ({ isOpen }) => {
    this.setState({ isOpen });
  };

  render() {
    const props = this.props;
    const { id, collections, lat, lng } = queryString.parse(
      props.location.search
    );
    const selectedPoint = id ? exampleData[id] : defaultPoint;
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{
          lat: lat || defaultPoint.lat,
          lng: lng || defaultPoint.lng
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
                  selected collections: {collections}
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
