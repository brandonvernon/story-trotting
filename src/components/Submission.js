import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, FormExample} from 'react-bootstrap'
import './Submission.css';

class Submission extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Headline</ControlLabel>
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Desription</ControlLabel>
          <FormControl
            type="text"
            value={this.state.description}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Location Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.location_name}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Address</ControlLabel>
          <FormControl
            type="text"
            value={this.state.address}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Latitude</ControlLabel>
          <FormControl
            type="text"
            value={this.state.lat}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Longitude</ControlLabel>
          <FormControl
            type="text"
            value={this.state.long}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
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
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Tags</ControlLabel>
          <FormControl
            type="text"
            value={this.state.tags}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Collection</ControlLabel>
          <FormControl
            type="text"
            value={this.state.collection}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Time</ControlLabel>
          <FormControl
            type="text"
            value={this.state.timestamp}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Time End</ControlLabel>
          <FormControl
            type="text"
            value={this.state.timestamp_end}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
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
          <HelpBlock></HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Sources</ControlLabel>
          <FormControl
            type="text"
            value={this.state.sources}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup><FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Your Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.owner}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock></HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default Submission;
