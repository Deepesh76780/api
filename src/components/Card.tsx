import * as React from "react";
import { Link } from "react-router-dom";

interface ICardProps {
  name: string;
  Img: string;
  Id: number;
}

const Card = (props: ICardProps) => {
  return (
    <Link to={`/show/${props.Id}`}>
      <div className="w-52 h-80 bg-dark-theme-2 p-4 rounded-sm shadow-lg shadow-cyan-500/50 cursor-pointer hover:shadow-cyan-300 transition duration-150">
        <img src={props.Img} alt={props.name} height="200px" width="200px" />
        <h2 className="text-center font-bold text-lg mt-1 uppercase text-slate-200 tracking-wide">
          {props.name}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
