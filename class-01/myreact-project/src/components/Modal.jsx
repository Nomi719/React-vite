import React from 'react';
import './Modal.css'; // Optional: for custom styling

function Modal({ isOpen, onClose, card }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={card.img} alt={card.title} className="modal-image" />
        <h2 className="modal-title">{card.title}</h2>
        <p className="modal-price">{card.price}</p>
      </div>
    </div>
  );
}

export default Modal;