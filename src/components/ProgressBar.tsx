import React from "react";

interface Props {
  formNumber: number;
  formSelector: (value: number) => void;
}

function ProgressBar({ formNumber, formSelector }: Props) {
  return (
    <div className="progress">
      <div
        onClick={() => formSelector(0)}
        className={`circle ${formNumber >= 0 && "done"}`}
      >
        <span className="label">1</span>
      </div>

      <span
        className={`bar ${
          formNumber === 0 ? "active" : formNumber >= 0 && "done"
        }`}
      ></span>

      <div
        onClick={() => formSelector(1)}
        className={`circle ${formNumber >= 1 && "done"}`}
      >
        <span className="label">2</span>
      </div>

      <span
        className={`bar ${
          formNumber === 1 ? "active" : formNumber >= 1 && "done"
        }`}
      ></span>

      <div
        onClick={() => formSelector(2)}
        className={`circle ${formNumber >= 2 && "done"}`}
      >
        <span className="label">3</span>
      </div>

      <span
        className={`bar ${
          formNumber === 2 ? "active" : formNumber >= 2 && "done"
        }`}
      ></span>

      <div
        onClick={() => formSelector(3)}
        className={`circle ${formNumber >= 3 && "done"}`}
      >
        <span className="label">4</span>
      </div>
    </div>
  );
}

export default ProgressBar;
