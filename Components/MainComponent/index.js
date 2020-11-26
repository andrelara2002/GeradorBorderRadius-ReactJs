import React, { Component } from "react";
import "./styles.css";

class MainComponent extends Component {
  constructor(props) {
    super();
    this.spaceVariables = {
      unit: ["px", "rem"]
    };
    this.state = {
      size: "20rem",
      top_left: null,
      top_right: null,
      bottom_left: null,
      bottom_right: null
    };
  }

  componentDidMount() {
    this.getInputsValues();
  }

  getInputsValues = () => {
    let topLeft = document.getElementById("topLeft");
    let topRight = document.getElementById("topRight");
    let bottomLeft = document.getElementById("bottomLeft");
    let bottomRight = document.getElementById("bottomRight");

    if (
      isNaN(topLeft.value) ||
      isNaN(topRight.value) ||
      isNaN(bottomLeft.value) ||
      isNaN(bottomRight.value)
    ) {
      alert("Por favor, insira um número");
    } else {
      this.setState(
        {
          size: this.state.size,
          top_left: topLeft.value,
          top_right: topRight.value,
          bottom_left: bottomLeft.value,
          bottom_right: bottomRight.value
        },
        () => {
          this.generateSquare();
        }
      );
    }
  };

  generateSquare = () => {
    let actualUnit = "";

    if (1 === 1) {
      actualUnit = this.spaceVariables.unit[0];
    }

    const square = document.getElementById("squareElement");
    square.style.width = this.state.size;
    square.style.height = this.state.size;

    square.style.borderTopLeftRadius = this.state.top_left + actualUnit;
    square.style.borderTopRightRadius = this.state.top_right + actualUnit;

    square.style.borderBottomLeftRadius = this.state.bottom_left + actualUnit;
    square.style.borderBottomRightRadius = this.state.bottom_right + actualUnit;
    square.style.border = "1px solid black";
  };

  setSquareBorders = () => {
    this.setState(
      {
        width: this.state.width,
        height: this.state.height,
        top_left: this.state.top_left,
        top_right: this.state.top_right,
        bottom_left: this.state.bottom_left,
        bottom_right: this.state.bottom_right
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
          <div className="inputDiv">
            <input id="topLeft" value={10} />
          </div>
          <div className="inputDiv">
            <input id="topRight" value={10} />
          </div>
          <div className="inputDiv">
            <input id="bottomLeft" value={10} />
          </div>
          <div className="inputDiv">
            <input id="bottomRight" value={10} />
          </div>
        </div>
        <button onClick={() => this.setSquareBorders()}> clique aqui </button>
      </div>
    );
  }
}
export default MainComponent;
