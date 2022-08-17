import React from "react";
import Cards from "../components/Cards";
import Form from "../components/Form";
import ProgressBar from "../components/ProgressBar";
import Title from "../components/Title";
import Brand from "../components/Brand";
import "../scss/components/_main-card.scss";
type Props = {};

function MainCard({}: Props) {
  return (
    <div className="main-card">
      <Brand />
      <ProgressBar />
      <Title />
      <Form />
      <Cards />
      <button className="formButton">Button</button>
    </div>
  );
}

export default MainCard;
