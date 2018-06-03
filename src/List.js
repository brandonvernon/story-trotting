import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
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
    this.setState({searchData: exampleData});
  }

  handleClose() {
    this.props.history.push('/')
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    const { location, searchData } = this.props
    const query = queryString.parse(location.search);

    return (
      <div className="">
        <a onClick={this.handleShow}>
          List View

        </a>
        <Modal show={true} onHide={this.handleClose}>

        <div className="">
          <h2>Collections</h2>
          <div className="list-link">
            <Link
              to={`/home?${queryString.stringify({
                collections: ["Willie Nelson", "Movies"]
              })}`}
            >
              Movies
            </Link>
          </div>
          <h2>List</h2>
          {Object.values(searchData).map(mk => {
            return (
              <div className="list-link" key={mk.id}>
                <Link
                  to={`/home?${queryString.stringify({
                    ...query,
                    id: mk.id,
                    lat: mk.lat,
                    lng: mk.long
                  })}`}
                >
                  {mk.name}
                </Link>
              </div>
            );
          })}
        </div>
      </Modal>

      </div>
    );

  }
}

export default List;
