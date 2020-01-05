import React from "react";

const Card = props => {
  return (
    <div className={props.class}>
      <img src={props.image} alt={props.image} />
       <div>
        <h2> {props.title}</h2>
        <p> {props.content}</p>
       </div>
    </div>
   
  );
};

export default Card;