import React from "react";
import "./style.css";
import MainComponent from "./Components/MainComponent/index.js";
import Header from "./Components/Header/index.js";

export default function App() {
  return (
    <div>
      <Header />
      <MainComponent />
    </div>
  );
}
