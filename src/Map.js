import React from "react";
import { defaultPoint } from "./exampleData";
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
import { Link } from "react-router-dom";

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
    const query = queryString.parse(props.location.search);
    const { id, collections, lat, lng } = query;
    const selectedPoint = id && this.props.searchData[id];

    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{
          lat: lat ? Number(lat) : defaultPoint.lat,
          lng: lng ? Number(lng) : defaultPoint.lng
        }}
      >
        {Object.values(this.props.searchData).map(mk => (
          <Marker
            key={`${mk.lat}${mk.lng}`}
            position={{ lat: mk.lat, lng: mk.lng }}
            onClick={() => this.onClick({ selected: mk.id })}
          >
            {this.state.isOpen && mk.id === id ? (
              <InfoWindow onClick={() => this.onToggleOpen({ isOpen: false })}>
                <div>
                  <Link
                    to={`/detail?${queryString.stringify({
                      ...query,
                      id: mk.id,
                      lat: mk.lat,
                      lng: mk.lng
                    })}`}
                  >
                    <h1>{mk.name}</h1>
                  </Link>
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
