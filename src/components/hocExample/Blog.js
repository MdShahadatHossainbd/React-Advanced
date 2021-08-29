import React, { Component } from "react";
import HOC from "./HOC";

class Blog extends Component {
  render() {
    return (
      <div>
        Total loved {this.props.username} <br />
        {this.props.CountNumber} <br />
        <button onClick={this.props.handleCLick}>Blog</button>
      </div>
    );
  };
};

const EnhancedBlog = HOC(Blog, 1);

export default EnhancedBlog;