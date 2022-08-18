interface Props {
  formNumber: number;
}

function Form({ formNumber }: Props) {
  const FormSelector = ({ select }: { select: number }) => {
    if (select === 0) {
      return (
        <>
          <div className="labelInput">
            <h5>Full Name</h5>
            <input type="text" placeholder="Steve Jobs" />
          </div>
          <div className="labelInput">
            <h5>Display Name</h5>
            <input type="text" placeholder="Steve" />
          </div>
        </>
      );
    } else if (select === 1) {
      return (
        <>
          <div className="labelInput">
            {" "}
            <h5>Workspace Name</h5>
            <input type="text" placeholder="Eden" />
          </div>
          <div className="labelInput">
            <h5>
              Workspace URL <span className="optional">(optional)</span>
            </h5>
            <div className="workURL">
              <h5>www.eden.com/</h5>
              <input type="text" placeholder="Example" />
            </div>
          </div>
        </>
      );
    } else return <></>;
  };

  return (
    <div className="formContainer">
      <FormSelector select={formNumber} />
    </div>
  );
}

export default Form;
