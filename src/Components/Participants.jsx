import React, { Component } from "react";
import Participant from "./Participant";
class Participants extends Component {
  render() {
    return (
      <div className="Participants">
        {Object.keys(this.props.predictions)
          .sort()
          .map(participant => {
            return (
              <Participant
                key={participant}
                prediction={this.props.predictions[participant].prediction}
                name={participant}
                results={this.props.results}
                scores={this.props.scores}
                calculateScore={this.props.calculateScore}
              />
            );
          })}
      </div>
    );
  }
}

export default Participants;
