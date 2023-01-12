import React from "react";
import train from "./Trainer.module.css"


function Trainer(props) {
  return (
    <>
      <div className={train.cards}>
        <div  className={train.card}>
          <img  src={props.img} alt="trainer" className={train.cardimg} />
          <div className={train.cardinfo}>
            <span className={train.cardname}>{props.name}</span>
            <h3 className={train.cardage}>{props.age}</h3>
            <h4>*CERTIFIED Trainer*</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trainer;
