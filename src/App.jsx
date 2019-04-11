import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdated: "April 11 : 18:50 pm",
      correct: {},
      participants: [
        { name: "Luis", predictions: { arya: "d", john: "w" } },
        { name: "Miles", predictions: { arya: "d", john: "w" } }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <h3>Last updated: {this.state.lastUpdated}</h3>
        <div className="people">
          {this.state.participants.sort().map(participant => {
            return <h5>{participant.name}</h5>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
