import React, { Component } from 'react';
import './Submission.css';

class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A story was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='container'>
        <form className='form' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col'>
              <label>
                Headline
                <input type="text" value={this.state.name} onChange={this.handleChange} />
              </label>
            </div>
            <div className='col'>
              <label>
                Description
                <input type="text" value={this.state.description} onChange={this.handleChange} />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label>
                Location Name
                <input type="text" value={this.state.location_name} onChange={this.handleChange} />
              </label>
            </div>
            <div className='col'>
              <label>
                Address
                <input type="text" value={this.state.address} onChange={this.handleChange} />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label>
                Latitude
                <input type="text" value={this.state.lat} onChange={this.handleChange} />
              </label>
            </div>
            <div className='col'>
              <label>
                Longitude
                <input type="text" value={this.state.long} onChange={this.handleChange} />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label>
                Drop Pin
                <input type="text" value={this.state.drop_pin} onChange={this.handleChange} />
              </label>
            </div>
            <div className='col'>
              <label>
                Tags
                <input type="text" value={this.state.tags} onChange={this.handleChange} />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label>
                Collection
                <input type="text" value={this.state.collection} onChange={this.handleChange} />
              </label>
            </div>
            <div className='col'>
              <label>
                Time
                <input type="text" value={this.state.timestamp} onChange={this.handleChange} />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label>
                Time End
                <input type="text" value={this.state.timestamp_end} onChange={this.handleChange} />
              </label>
            </div>
            <div className='col'>
              <label>
                Current Time
                <input type="text" value={this.state.timestamp_created} onChange={this.handleChange} />
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label>
                Sources
                <input type="text" value={this.state.sources} onChange={this.handleChange} />
              </label>
            </div>
            <div className='col'>
              <label>
                Your Name
                <input type="text" value={this.state.owner} onChange={this.handleChange} />
              </label>
            </div>
          </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Submission;
