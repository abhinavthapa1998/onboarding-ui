import React from "react";
import logo from "../assets/logos/EdenLogo.png";

type Props = {};

function Brand({}: Props) {
  return (
    <div className="brand">
      <img className="brandImage" src={logo} alt="Logo" />
      <h2>Eden</h2>
    </div>
  );
}

export default Brand;
