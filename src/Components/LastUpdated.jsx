import React, { Component } from "react";

class LastUpdated extends Component {
  render() {
    return (
      <div className="LastUpdated">
        Last Updated on: {this.props.lastUpdated}
      </div>
    );
  }
}

export default LastUpdated;
