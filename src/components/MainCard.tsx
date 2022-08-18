import React, { useState } from "react";
import Cards from "../components/Cards";
import Form from "../components/Form";
import ProgressBar from "../components/ProgressBar";
import Title from "../components/Title";
import Brand from "../components/Brand";

type Props = {};

function MainCard({}: Props) {
  const [formNumber, setFormNumber] = useState<number>(1);

  return (
    <div className="main-card">
      <Brand />
      <ProgressBar formNumber={formNumber} />
      <Title formNumber={formNumber} />
      <Form formNumber={formNumber} />
      <Cards formNumber={formNumber} />
      <button
        onClick={() => setFormNumber((prev) => prev + 1)}
        className="formButton"
      >
        Create Workspace
      </button>
    </div>
  );
}

export default MainCard;
