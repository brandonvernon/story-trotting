import React, { Component } from "react";
import Submission from './components/Submission';
import ImageUpload from './components/ImageUpload';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Story Trotting</h1>
        </header>
        <p className="App-intro">Container for our app.</p>
        <Submission />
        <ImageUpload />
      </div>
    );
  }
}

export default App;
