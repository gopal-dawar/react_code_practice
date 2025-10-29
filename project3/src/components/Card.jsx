import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <h1>{props.obje.name}</h1>
        <p> {props.obje.line} </p>
      </div>
    </div>
  );
};

export default Card;
