import React from "react";
import { defaultPoint } from "./exampleData";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  Circle
} from "react-google-maps";
import { Link } from "react-router-dom";
import queryString from "query-string";
import getLocation from "./helpers/location";
// import './Map.css'
import mapStyle from "./mapStyle.js";

class MyGoogleMap extends React.PureComponent {
  state = {
    isOpen: true,
    defaultPoint: defaultPoint,
    zoomLevel: 12
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
  updateLocation = () => {
    getLocation()
      .then(result => {
        this.setState({
          defaultPoint: {
            lat: result.coords.latitude,
            long: result.coords.longitude
          }
        });
      })
      .catch(err => console.log(err));
  };
  componentWillMount() {
    this.updateLocation();
  }
  componentDidMount() {
    setInterval(() => {
      this.updateLocation();
    }, 30000);
  }
  render() {
    const props = this.props;
    const query = queryString.parse(props.location.search);
    const { id, collection, lat, long } = query;
    const defaultCenter = {
      lat: lat ? Number(lat) : this.state.defaultPoint.lat,
      lng: long ? Number(long) : this.state.defaultPoint.long
    };
    return (
      <GoogleMap
        defaultZoom={this.state.zoomLevel}
        defaultCenter={defaultCenter}
        options={{ styles: mapStyle }}
      >
        {Object.values(this.props.searchData).map(mk => (
          <Marker
            key={`${mk.lat}${mk.long}${mk.id}`}
            position={{ lat: mk.lat, lng: mk.long }}
            clickable
            draggable
            editable
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
                      long: mk.long
                    })}`}
                  >
                    <h4>{mk.name}</h4>
                  </Link>
                  <div>{mk.description}</div>
                </div>
              </InfoWindow>
            ) : (
              ""
            )}
          </Marker>
        ))}
        <Circle
          className="userLocMark"
          center={this.state.defaultPoint}
          defaultRadius={200}
          options={{
            fillColor: "#f00",
            fillOpacity: "0.7",
            strokeColor: "#f00"
          }}
        />
      </GoogleMap>
    );
  }
}

const Map = compose(withScriptjs, withGoogleMap, withRouter)(props => {
  return <MyGoogleMap {...props} />;
});

export default Map;

// componentDidMount: function() {
//    var intervalId = setInterval(this.timer, 1000);
//    // store intervalId in the state so it can be accessed later:
//    this.setState({intervalId: intervalId});
// },
