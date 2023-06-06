import * as React from "react";
interface ICardProps {
  name: string;
  Img: string;
  Id: number;
}
const Card = (props: ICardProps) => {
  return (
    <div className="w-52 h-80 ">
      <img src={props.Img} alt="" height="200px" width="200px" />
      <h2>{props.name}</h2>
    </div>
  );
};

export default Card;
