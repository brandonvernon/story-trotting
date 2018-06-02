import React, { Component } from "react";
import NavbarHeader from './components/Navbar';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHeader />
        <p className="App-intro">Container for our app.</p>
      </div>
    );
  }
}

export default App;
