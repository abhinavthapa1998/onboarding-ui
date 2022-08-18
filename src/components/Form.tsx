import React from "react";

type Props = {};

function Form({}: Props) {
  return (
    <div className="formContainer">
      {/* <h6>Full Name</h6>
      <input type="text" placeholder="Steve Jobs" />
      <h6>Display Name</h6>
      <input type="text" placeholder="Steve" /> */}
      <h6>Workspace Name</h6>
      <input type="text" placeholder="Eden" />
      <h6>Workspace URL</h6>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h6>www.eden.com/</h6>
        <input type="text" placeholder="Example" />
      </div>
    </div>
  );
}

export default Form;
