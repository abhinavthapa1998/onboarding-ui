import Card from "./Card";
import Person from "../assets/icons/person.svg";
import People from "../assets/icons/people.svg";
type Props = {};

function Cards({}: Props) {
  return (
    <div className="cardsContainer">
      <Card
        icon={Person}
        heading="For myself"
        subHeading="Write better. Think more clearly. Stay organized."
        active={false}
      />
      <Card
        icon={People}
        heading="With my team"
        subHeading="Wikis, docs, tasks & projects, all in one place."
        active={true}
      />
    </div>
  );
}

export default Cards;
