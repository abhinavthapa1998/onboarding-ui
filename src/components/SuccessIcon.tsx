import Check from "../assets/icons/check.svg";

interface Props {
  formNumber: number;
}

const SuccessIcon = ({ formNumber }: Props) => {
  if (formNumber !== 3) {
    return <></>;
  }
  return (
    <div className="checkContainer">
      <img className="checkIcon" src={Check} alt="success" />
    </div>
  );
};

export default SuccessIcon;
