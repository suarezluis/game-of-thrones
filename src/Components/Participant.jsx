import React, { Component } from "react";

class Participant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }
  render() {
    return (
      <div className="Participant">
        <span className="pdf">
          <i
            onClick={() => {
              window.open(
                `/pdf/${this.props.name.split(" ")[0].toLowerCase()}.pdf`
              );
            }}
            className="far fa-file-pdf"
          />
        </span>
        <span className="name">{this.props.name}</span>
        <span className="score">
          (Score:{" "}
          {this.props.calculateScore(this.props.name, this.props.prediction)}){" "}
        </span>
        <span className="expand">
          {!this.state.display ? (
            <i
              onClick={() => {
                this.setState({ display: true });
              }}
              className="fas fa-angle-double-down"
            />
          ) : (
            ""
          )}
          {this.state.display ? (
            <i
              onClick={() => {
                this.setState({ display: false });
              }}
              className="fas fa-angle-double-up"
            />
          ) : (
            ""
          )}
        </span>

        {this.state.display ? (
          <table>
            <tbody>
              <tr key={this.props.name + "_header"}>
                <th>Character</th>
                <th>Alive</th>
                <th>Dead</th>
                <th>White Walker</th>
                <th>Result</th>
                <th>Points</th>
              </tr>
              {Object.keys(this.props.prediction)
                .sort()
                .map(character => {
                  return (
                    <tr
                      key={
                        this.props.name +
                        "_" +
                        character.split(" ")[0] +
                        character.split(" ")[1]
                      }
                    >
                      <td>{character}</td>
                      <td>
                        <img
                          className="statusImage"
                          src={
                            this.props.prediction[character] === "A"
                              ? "./images/alive.jpg"
                              : ""
                          }
                          alt=""
                        />
                        <p>
                          {this.props.prediction[character] === "A"
                            ? "Alive"
                            : ""}
                        </p>
                      </td>
                      <td>
                        <img
                          className="statusImage"
                          src={
                            this.props.prediction[character] === "D"
                              ? // || this.props.prediction[character] === "W"
                                "./images/dead.jpg"
                              : ""
                          }
                          alt=""
                        />
                        <p>
                          {this.props.prediction[character] === "D"
                            ? // || This.props.prediction[character] === "W"
                              "Dead"
                            : ""}
                        </p>
                      </td>
                      <td>
                        <img
                          className="statusImage"
                          src={
                            this.props.prediction[character] === "W"
                              ? "./images/white_walker.gif"
                              : ""
                          }
                          alt=""
                        />
                        <p>
                          {this.props.prediction[character] === "W"
                            ? "White Walker"
                            : ""}
                        </p>
                      </td>
                      <td>
                        <img
                          className="statusImage"
                          src={
                            this.props.results[character] === "A"
                              ? "./images/alive.jpg"
                              : this.props.results[character] === "D"
                              ? "./images/dead.jpg"
                              : this.props.results[character] === "W"
                              ? "./images/white_walker.gif"
                              : ""
                          }
                          alt=""
                        />
                        <p>
                          {this.props.results[character] === "A"
                            ? "Alive"
                            : this.props.results[character] === "D"
                            ? "Dead"
                            : this.props.results[character] === "W"
                            ? "White Walker"
                            : ""}
                        </p>
                      </td>
                      <td>
                        {this.props.results[character] ===
                        this.props.prediction[character]
                          ? this.props.results[character] === "A" ||
                            this.props.results[character] === "D"
                            ? "1"
                            : this.props.results[character] === "W"
                            ? "2"
                            : ""
                          : "0"}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Participant;
