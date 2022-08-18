import React from "react";

type Props = {};

function Form({}: Props) {
  return (
    <div className="formContainer">
      <h6>Full Name</h6>
      <input type="text" placeholder="Steve Jobs" />
      <h6>Display Name</h6>
      <input type="text" placeholder="Steve" />
    </div>
  );
}

export default Form;
