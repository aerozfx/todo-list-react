import React from "react";
import Card from "../Card"
import {v4 as uuidv4} from "uuid"
import "./List.css"

const List = ({items, updateItems}) => {
  const deleteOneItem = (id) => {
    let itemsLeft = items.filter((_, idx) => id !== idx)
    updateItems([...itemsLeft])
  }
  return (
    <>
    <section className="todo-list">
      <ul>
        {
          items.map((item, i) => 
            <li key={uuidv4()}>
              {<Card text={item} deleteOneItem={() => deleteOneItem(i)}/>}
            </li>
            )
        }
      </ul>
    </section>
    </>
  );
};

export default List;
