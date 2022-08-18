interface Props {
  formNumber: number;
}

function Title({ formNumber }: Props) {
  const titles = [
    {
      heading: "Welcome! First things first...",
      subHeading: "You can always change them later.",
    },
    {
      heading: "Let's set up a home for all your work",
      subHeading: "You can always create another workspace later.",
    },
    {
      heading: "How are you planning to use Eden?",
      subHeading: "We'll streamline your setup experience accordingly.",
    },
    {
      heading: "Congratulations, Eren!",
      subHeading:
        "You have completed onboarding, you can start using the Eden!",
    },
  ];
  return (
    <div className="titlesContainer">
      <h1>{titles[formNumber].heading}</h1>
      <h4>{titles[formNumber].subHeading}</h4>
    </div>
  );
}

export default Title;
