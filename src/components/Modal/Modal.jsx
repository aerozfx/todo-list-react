import React, { useEffect, useState } from "react";
import "./Modal.css"

const Modal = () => {
  let [width, setWidth] = useState(0)
  useEffect(() => {
    const updateWidthBar = () => {
      let i = 0
      setInterval(() => {
        setWidth(i)
        i++
      }, 17)
  
    }
    updateWidthBar()
    return () => {
      clearInterval(updateWidthBar)
    }
  }, [])
  return (
  <React.Fragment>
    <section className="modal">
      <div className="bar" style={{width}}></div>
      <p className="modal-text">Tarea añadida a la lista!</p>
    </section>
  </React.Fragment>
  );
};

export default Modal;
