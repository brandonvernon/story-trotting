import React, {Component} from 'react';
import {Modal, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import exampleData from "./exampleData";
import queryString from "query-string";

class ListModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      value: '',
      show: false
    };
  }

  componentWillMount() {
    this.setState({searchData: exampleData});
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  render() {
    console.log(this.props)
    console.log(this.state)

    return (
      <div className="">
        <a onClick={this.handleShow}>
          ListModal

        </a>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <div className="container">
            <h4>
              List
            </h4>

          </div>
        </Modal>
      </div>
    )
  }
}

export default ListModal;
