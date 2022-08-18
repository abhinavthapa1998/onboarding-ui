import React, { useState } from "react";
import Cards from "../components/Cards";
import Form from "../components/Form";
import ProgressBar from "../components/ProgressBar";
import Title from "../components/Title";
import Brand from "../components/Brand";
import SuccessIcon from "./SuccessIcon";

type Props = {};

function MainCard({}: Props) {
  const [formNumber, setFormNumber] = useState<number>(0);
  const formSelector = (value: number): void => {
    setFormNumber(value);
  };
  return (
    <div className="main-card">
      <Brand />
      <ProgressBar formNumber={formNumber} formSelector={formSelector} />
      <SuccessIcon formNumber={formNumber} />
      <Title formNumber={formNumber} />
      <Form formNumber={formNumber} />
      <Cards formNumber={formNumber} />
      <button
        onClick={() =>
          setFormNumber((prev) => {
            if (prev < 3) {
              return prev + 1;
            } else return 3;
          })
        }
        className="formButton"
      >
        {formNumber !== 3 ? "Create Workspace" : "Launch Eden"}
      </button>
    </div>
  );
}

export default MainCard;
