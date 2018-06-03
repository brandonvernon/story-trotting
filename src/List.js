import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalHeader } from "react-bootstrap";
import queryString from "query-string";
import exampleData from "./exampleData";
import "./List.css";

class List extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.setState({ searchData: exampleData });
  }

  handleClose() {
    this.props.history.push("/");
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { location, searchData } = this.props;
    const query = queryString.parse(location.search);
    const { id, collection, lat, long } = query;

    return (
      <div className="">
        <a onClick={this.handleShow}>List View</a>
        <Modal show={true} onHide={this.handleClose}>
          <ModalHeader>
            <h4>{collection}</h4>
          </ModalHeader>
          <div className="">
            {Object.values(searchData).map(mk => {
              return (
                <Link
                  key={mk.id}
                  to={`/home?${queryString.stringify({
                    ...query,
                    id: mk.id,
                    lat: mk.lat,
                    lng: mk.long
                  })}`}
                >
                  <div className="list-link">
                    {mk.name}
                    <div>
                      <small style={{ color: "grey" }}>{mk.description}</small>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Modal>
      </div>
    );
  }
}

export default List;
