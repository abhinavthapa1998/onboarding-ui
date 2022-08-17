import React from "react";
import Card from "./Card";

type Props = {};

function Cards({}: Props) {
  return (
    <div className="cardsContainer">
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
