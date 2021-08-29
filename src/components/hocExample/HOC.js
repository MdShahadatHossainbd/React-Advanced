import React from "react";

const HOC = (Component, data) => {
  console.log("data", data);

  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          // count : 0,
        count: data, // initinal 0
        name: JSON.stringify(localStorage.getItem("username")),
        //Chrome -> Applications-> Local Storage -> localhost:3000 -> key:usename, value: shahadat
        //Firefox -> Storage -> Local Storage -> localhost:3000 -> key:usename, value: shahadat
      };
    }

    handleCLick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <Component
          username={this.state.name}
          CountNumber={this.state.count}
          handleCLick={this.handleCLick}
        />
      );
    }
  };
};

export default HOC;