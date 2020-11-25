import React, { Component } from "react";
import "./styles.css";

class MainComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      width: "20rem",
      height: "20rem",
      top_left: "10px",
      top_right: "10px",
      bottom_left: "10px",
      bottom_right: "10px"
    };
  }

  componentDidMount() {
    this.generateSquare();
  }

  generateSquare = () => {
    const square = document.getElementById("squareElement");
    square.style.width = this.state.width;
    square.style.height = this.state.height;

    square.style.borderTopLeftRadius = this.state.top_left;
    square.style.borderTopRightRadius = this.state.top_right;

    square.style.borderBottomLeftRadius = this.state.bottom_left;
    square.style.borderBottomRightRadius = this.state.bottom_right;
    square.style.border = "1px solid black";
  };

  setSquareBorders = () => {
    this.setState(
      {
        width: this.state.width,
        height: this.state.height,
        top_left: "4rem",
        top_right: "4rem",
        bottom_left: "2rem",
        bottom_right: "2rem"
      },
      () => {
        this.generateSquare();
      }
    );
  };

  render() {
    return (
      <div className="main">
        <div className="square" id="squareElement" />
        <div className="inputForm">
          <label for="topLeft">Top Left </label>
          <input name="topLeft" />
          <label for="topRight">Top Right </label>
          <input name="topRight" />
          <label for="bottomLeft">Bottom Left </label>
          <input name="bottomLeft" />
          <label for="bottomRight">Bottom Right</label>
          <input name="bottomRight" />
        </div>
        <button onClick={() => this.setSquareBorders()}> clique aqui </button>
      </div>
    );
  }
}
export default MainComponent;
