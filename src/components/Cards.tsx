import Card from "./Card";
import Person from "../assets/icons/person.svg";
import People from "../assets/icons/people.svg";
import { useState } from "react";
type Props = {};

function Cards({}: Props) {
  const [activeID, setActiveID] = useState<number>(0);
  const handleClick = (id: number): void => {
    setActiveID(id);
  };
  return (
    <div className="cardsContainer">
      <Card
        id={1}
        icon={Person}
        heading="For myself"
        subHeading="Write better.Think more clearly. Stay organized."
        activeID={activeID}
        handleClick={handleClick}
      />
      <Card
        id={2}
        icon={People}
        heading="With my team"
        subHeading="Wikis, docs, tasks & projects, all in one place."
        activeID={activeID}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Cards;
