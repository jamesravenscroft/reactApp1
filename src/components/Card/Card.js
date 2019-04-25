import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
    <img alt={props.image.replace(".PNG", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);  

export default Card;
