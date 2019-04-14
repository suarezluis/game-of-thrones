import React, { Component } from "react";

import "./App.css";
import axios from "axios";

import Participants from "./Components/Participants";
import LastUpdated from "./Components/LastUpdated";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdated: "April 11 : 18:50 pm",
      predictions: {},
      results: {},
      scores: {}
    };
  }
  componentWillMount() {
    axios
      .get("./participants.json")
      .then(response => {
        let scores = this.state.scores;
        this.setState({ predictions: response.data });
        Object.keys(response.data).map(participant => {
          scores[participant] = 0;
          this.setState({ scores });
          return 0;
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("./lastUpdated.json")
      .then(response => {
        this.setState({ lastUpdated: response.data["Last Updated"] });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("./results.json")
      .then(response => {
        this.setState({ results: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <img id="logo" src="./images/game-of-thrones-logo.jpg" alt="" />
        <LastUpdated lastUpdated={this.state.lastUpdated} />
        <br />
        <Participants
          predictions={this.state.predictions}
          results={this.state.results}
          scores={this.state.scores}
          calculateScore={this.calculateScore}
        />
      </div>
    );
  }
  calculateScore = (name, prediction) => {
    let scores = this.state.scores;
    let score = 0;
    Object.keys(prediction).map(character => {
      if (
        prediction[character] === this.state.results[character] &&
        prediction[character] === "A"
      ) {
        score += 1;
      }
      if (
        prediction[character] === this.state.results[character] &&
        prediction[character] === "D"
      ) {
        score += 1;
      }
      if (
        prediction[character] === "D" &&
        this.state.results[character] === "W"
      ) {
        score += 1;
      }
      if (
        prediction[character] === this.state.results[character] &&
        prediction[character] === "W"
      ) {
        score += 2;
      }
      return 0;
    });
    scores[name] = score;
    return score;
  };
}

export default App;
