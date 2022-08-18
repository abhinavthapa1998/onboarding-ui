import { titles } from "../services/formData";

interface Props {
  formNumber: number;
}

function Title({ formNumber }: Props) {
  return (
    <div className="titlesContainer">
      <h1>{titles[formNumber].heading}</h1>
      <h4>{titles[formNumber].subHeading}</h4>
    </div>
  );
}

export default Title;
