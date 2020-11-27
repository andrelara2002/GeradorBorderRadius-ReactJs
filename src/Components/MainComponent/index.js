import React, { Component } from "react";
import "./styles.css";

class MainComponent extends Component {
  constructor(props) {
    super();
    this.spaceVariables = {
      unit: "px"
    };
    this.state = {
      top_left: 10,
      top_right: 10,
      bottom_left: 10,
      bottom_right: 10
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

  setButtonColors = () => {
    const buttonElementPx = document.getElementById("pxButton");
    const buttonElementRem = document.getElementById("remButton");

    if (this.spaceVariables.unit === "px") {
      buttonElementPx.style.borderColor = "#07d962";
      buttonElementPx.style.background = "#19181f";

      buttonElementRem.style.background = "#67159c";
      buttonElementRem.style.borderColor = "#67159c";
    } else {
      buttonElementRem.style.borderColor = "#07d962";
      buttonElementRem.style.background = "#19181f";

      buttonElementPx.style.background = "#67159c";
      buttonElementPx.style.borderColor = "#67159c";
    }
  };

  generateSquare = () => {
    let actualUnit = this.spaceVariables.unit;
    this.setButtonColors();

    const square = document.getElementById("squareElement");

    square.style.borderTopLeftRadius = this.state.top_left + actualUnit;
    square.style.borderTopRightRadius = this.state.top_right + actualUnit;

    square.style.borderBottomLeftRadius = this.state.bottom_left + actualUnit;
    square.style.borderBottomRightRadius = this.state.bottom_right + actualUnit;
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

  cleanworkspace = () => {
    let topLeft = document.getElementById("topLeft");
    let topRight = document.getElementById("topRight");
    let bottomLeft = document.getElementById("bottomLeft");
    let bottomRight = document.getElementById("bottomRight");

    const inputHidden = document.getElementById("hiddenInput");

    topLeft.value = "";
    topRight.value = "";
    bottomLeft.value = "";
    bottomRight.value = "";
    inputHidden.value = "";

    this.setState(
      {
        top_left: 0,
        top_right: 0,
        bottom_left: 0,
        bottom_right: 0
      },
      () => {
        this.generateSquare();
      }
    );
  };

  copyToClipboard = () => {
    const inputs = document.getElementsByClassName("inputSession");
    const { top_left, top_right, bottom_left, bottom_right } = this.state;
    const { unit } = this.spaceVariables;

    const inputHidden = document.getElementById("hiddenInput");

    if (
      inputs[0].value === "" ||
      inputs[1].value === "" ||
      inputs[2].value === "" ||
      inputs[3].value === ""
    ) {
      inputHidden.value = "Por favor, Complete os campos";
      inputHidden.hidden = false;
    } else {
      console.log(inputs[0].value);
      inputHidden.value = `border-radius: ${top_left + unit} ${top_right +
        unit} ${bottom_right + unit} ${bottom_left + unit};`;

      inputHidden.hidden = false;
    }
  };

  render() {
    return (
      <div className="main">
        <div className="square" id="squareElement">
          <input id="hiddenInput" hidden={true} />
        </div>
        <div className="inputForm">
          <div className="inputDiv">
            <input
              id="topLeft"
              className="inputSession"
              type="number"
              onChange={() => this.getInputsValues()}
            />
          </div>
          <div className="inputDiv">
            <input
              id="topRight"
              type="number"
              className="inputSession"
              onChange={() => this.getInputsValues()}
            />
          </div>
          <div className="inputDiv">
            <input
              id="bottomLeft"
              type="number"
              className="inputSession"
              onChange={() => this.getInputsValues()}
            />
          </div>
          <div className="inputDiv">
            <input
              id="bottomRight"
              type="number"
              className="inputSession"
              onChange={() => this.getInputsValues()}
            />
          </div>
        </div>
        <div className="buttonDiv">
          <button onClick={() => this.copyToClipboard()}>Gerar</button>
          <button onClick={() => this.cleanworkspace()}>Limpar</button>
          <div className="unitButton">
            <button
              onClick={() => {
                this.spaceVariables.unit = "rem";
                this.generateSquare();
              }}
              id="remButton"
            >
              REM
            </button>
            <button
              onClick={() => {
                this.spaceVariables.unit = "px";
                this.generateSquare();
              }}
              id="pxButton"
            >
              PX
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default MainComponent;
