import React from "react";

interface Props {
  formNumber: number;
}

function ProgressBar({ formNumber }: Props) {
  return (
    <div className="progress">
      <div className={`circle ${formNumber >= 1 && "done"}`}>
        <span className="label">1</span>
        <span className="title">Personal</span>
      </div>

      <span
        className={`bar ${
          formNumber === 1 ? "active" : formNumber >= 1 && "done"
        }`}
      ></span>

      <div className={`circle ${formNumber >= 2 && "done"}`}>
        <span className="label">2</span>
        <span className="title">Address</span>
      </div>

      <span
        className={`bar ${
          formNumber === 2 ? "active" : formNumber >= 2 && "done"
        }`}
      ></span>

      <div className={`circle ${formNumber >= 3 && "done"}`}>
        <span className="label">3</span>
        <span className="title">Payment</span>
      </div>

      <span
        className={`bar ${
          formNumber === 3 ? "active" : formNumber >= 3 && "done"
        }`}
      ></span>

      <div className={`circle ${formNumber >= 4 && "done"}`}>
        <span className="label">4</span>
        <span className="title">Review</span>
      </div>
    </div>
  );
}

export default ProgressBar;
