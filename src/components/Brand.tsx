import React from "react";
import logo from "../assets/logos/EdenLogo.png";
import "../scss/components/_brand.scss";
type Props = {};

function Brand({}: Props) {
  return (
    <div className="brand">
      <img src={logo} alt="Logo" />
      <h2>Eden</h2>
    </div>
  );
}

export default Brand;
