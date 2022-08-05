import React, { useState, useCallback } from "react";
import Modal from "react-modal";
import "./styles.css";

function More(props) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  return (
    <div>
      <input
        className="btn btn-success"
        type="button"
        value="More Details"
        onClick={openModal}
      />
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h1>{props.item.name}</h1>
        <h5>Description: {props.item.description}</h5>
        <img src={props.item.image} alt="" className="center" />
        <h3>Cost:</h3>
        <p>{props.item.price}</p>
        <h3>Categories:</h3>
        {props.item.categories.map((name) => {
          return <li>{name.name}</li>;
        })}
        <h3> Stock:</h3>
        <span>{props.item.status ? "Available" : "Not Available"}</span>
        <br />
        <br />
        <input
          className="btn btn-danger"
          type="button"
          value="Close"
          onClick={closeModal}
        />
      </Modal>
    </div>
  );
}
export default More;
