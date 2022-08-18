interface Props {
  id: number;
  icon: any;
  heading: string;
  subHeading: string;
  activeID: number;
  handleClick: (id: number) => void;
}

function Card({ id, icon, heading, subHeading, activeID, handleClick }: Props) {
  return (
    <div
      onClick={() => handleClick(id)}
      className={`cardContainer ${activeID === id && "active"}`}
    >
      <img
        className={`personIcon ${activeID === id && "activeIcon"}`}
        src={icon}
        alt="person"
      />
      <h4>{heading}</h4>
      <span className="bodyText">{subHeading}</span>
    </div>
  );
}

export default Card;
