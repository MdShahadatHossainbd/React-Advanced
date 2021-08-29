import React, { Component } from "react";
import HOC from "./HOC";

class Love extends Component {
  render() {
    return (
      <div>
        Total loved {this.props.username} <br />
        {this.props.CountNumber} <br />
        <button onClick={this.props.handleCLick}>Love :)</button>
      </div>
    );
  };
};

const EnhancedLoves = HOC(Love, 2);

export default EnhancedLoves;