import React from "react";
import { Icon } from "./../kit";
const Card = props => {
  return (
    <div className={props.class} onClick={() => props.markFavourite()}>
      <img src={props.image} alt={props.image} className="image" />
       <div>
        <h2> {props.title}</h2>
        <p> {props.content}</p>
        <Icon icon={props.icon} color={props.color} />
       </div>
    </div>
   
  );
};

export default Card;