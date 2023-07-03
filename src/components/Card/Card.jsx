import React from "react";
import { BsTrashFill } from "react-icons/bs";
import "./Card.css"
const Card = ({text, deleteOneItem}) => {
  return (    
    <div className="item">
      <p>{text}</p>
      <button onClick={deleteOneItem} className="btn delete-one">{<BsTrashFill />}</button>
    </div>)
};

export default Card;
