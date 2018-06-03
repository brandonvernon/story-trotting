import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormExample
} from "react-bootstrap";
import "./Submission.css";
import { addPoint } from "../clearblade";

class Submission extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { value: "" };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    addPoint(this.state).then(res => {
      debugger;
    });
  }

  render() {
    return (
      <form onSumbit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Headline</ControlLabel>
          <FormControl
            type="text"
            id="name"
            value={this.state.name}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Desription</ControlLabel>
          <FormControl
            id="description"
            type="text"
            value={this.state.description}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Location Name</ControlLabel>
          <FormControl
            id="location_name"
            type="text"
            value={this.state.location_name}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Address</ControlLabel>
          <FormControl
            id="address"
            type="text"
            value={this.state.address}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Latitude</ControlLabel>
          <FormControl
            id="lat"
            type="text"
            value={this.state.lat}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Longitude</ControlLabel>
          <FormControl
            id="long"
            type="text"
            value={this.state.long}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Drop Pin</ControlLabel>
          <FormControl
            type="text"
            value={this.state.drop_pin}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Tags</ControlLabel>
          <FormControl
            id="tags"
            type="text"
            value={this.state.tags}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Collection</ControlLabel>
          <FormControl
            id="collection"
            type="text"
            value={this.state.collection}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Time</ControlLabel>
          <FormControl
            id="timestamp"
            type="text"
            value={this.state.timestamp}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Time End</ControlLabel>
          <FormControl
            id="timestamp_end"
            type="text"
            value={this.state.timestamp_end}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Current Time</ControlLabel>
          <FormControl
            type="text"
            value={this.state.timestamp_created}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Sources</ControlLabel>
          <FormControl
            id="sources"
            type="text"
            value={this.state.sources}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Your Name</ControlLabel>
          <FormControl
            id="owner"
            type="text"
            value={this.state.owner}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock />
        </FormGroup>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Submission;
