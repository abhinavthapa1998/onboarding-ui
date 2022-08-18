interface Props {
  heading: string;
  subHeading: string;
}

function Title({ heading, subHeading }: Props) {
  return (
    <div>
      <h1>{heading}</h1>
      <h4>{subHeading}</h4>
    </div>
  );
}

export default Title;
