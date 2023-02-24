import React from "react";
import { updateVote } from "../api";
import { Product } from "../constants";
import styles from "../styles/image.module.css";

interface CardProps extends Product {
  updateUI: () => void;
}

const StudentCard = (item: CardProps) => {
  const { id, image, name, code, batch, updateUI, vote } = item;

  const handleVote = () => {
    updateVote(id).then(() => {
      updateUI();
    });
  };

  return (
    <div style={{border:"1px solid black"}}>
      <img className={styles.img} src={image} alt="" />
      <h4>Name:{name}</h4>
      <p>Student Code:{code}</p>
      <p>Batch:{batch}</p>
      <button onClick={handleVote}>Vote</button>
      <h4>Vote Count:{vote}</h4>
    </div>
  );
};

export default StudentCard;
