import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { distanceInWordsToNow, format } from "date-fns";
import "./Detail.css";

class Detail extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.history.push("/");
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { match, location, searchData, searchLocalPoints } = this.props;
    const { id, lat, long } = queryString.parse(location.search);
    const selectedPoint = searchData[id];
    if (!selectedPoint) return <div>Loading</div>;
    console.log(selectedPoint)

    return (
      <div className="Detail">
        <Modal show={true} onHide={this.handleClose}>
          <div className="detail-modal">
            <h2>{selectedPoint.name}</h2>
            <h4>{selectedPoint.description}</h4>
            <div>
              <img src={selectedPoint.image_url}></img>
            </div>

            <div className="stats">
              <div>
                <b>Collection:
                </b>
                {" "}{JSON.parse(selectedPoint.collection).map(coll => (
                  <Link
                    to={`/?${queryString.stringify({ collection: coll })}`}
                    onClick={() =>
                      searchLocalPoints({
                        lat: Number(lat),
                        long: Number(long),
                        collection: [coll]
                      })
                    }
                  >
                    {" "}{coll}
                  </Link>
                ))}
              </div>
              <div>
                <b>Address:
                </b>
                {" "}{selectedPoint.address}
              </div>
              <div>
                <b>Date:
                </b>{" "}{format(selectedPoint.timestamp, 'MMM DD YYYY')}
              </div>
              <div className="citation">
                <b>Source:</b>{" "}
                <a target="blank" href={selectedPoint.sources}>
                  {" "}{selectedPoint.sources}
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Detail;
