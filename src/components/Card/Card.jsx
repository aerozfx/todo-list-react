import React from "react";
import { BsTrashFill } from "react-icons/bs";
import "./Card.css"
const Card = ({text, deleteOneItem}) => {
  return (    
    <div className="item">
      <p>{text}</p>
      <button onClick={deleteOneItem}>{<BsTrashFill />}</button>
    </div>)
};

export default Card;
