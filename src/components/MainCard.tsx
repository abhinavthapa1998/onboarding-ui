import React from "react";
import Cards from "../components/Cards";
import Form from "../components/Form";
import ProgressBar from "../components/ProgressBar";
import Title from "../components/Title";
import Brand from "../components/Brand";

type Props = {};

function MainCard({}: Props) {
  return (
    <div className="main-card">
      <Brand />
      <ProgressBar />
      <Title
        heading="Welcome! First things first..."
        subHeading="You can always change then later"
      />
      <Form />
      {/* <Cards /> */}
      <button className="formButton">Button</button>
    </div>
  );
}

export default MainCard;
