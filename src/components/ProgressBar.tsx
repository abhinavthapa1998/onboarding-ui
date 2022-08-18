import React from "react";

type Props = {};

function ProgressBar({}: Props) {
  return (
    <div className="progress">
      <div className="circle done">
        <span className="label">1</span>
        <span className="title">Personal</span>
      </div>
      <span className="bar done"></span>
      <div className="circle done">
        <span className="label">2</span>
        <span className="title">Address</span>
      </div>
      <span className="bar half"></span>
      <div className="circle active">
        <span className="label">3</span>
        <span className="title">Payment</span>
      </div>
      <span className="bar"></span>
      <div className="circle">
        <span className="label">4</span>
        <span className="title">Review</span>
      </div>
    </div>
  );
}

export default ProgressBar;
