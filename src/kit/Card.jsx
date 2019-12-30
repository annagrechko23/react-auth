import React from "react";

const Card = props => {
  console.log(props.style);
  return (
    <div className={props.class}>
      <img src={props.image} />
       <div>
        <h2> {props.title}</h2>
        <p> {props.content}</p>
       </div>
    </div>
   
  );
};

export default Card;