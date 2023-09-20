import React, { useEffect } from 'react';
import {createPortal} from 'react-dom';
import './styles.css';

const modalRoot = document.querySelector("#modal")

export const Modal = ({ img, closeModal }) => {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);
  
  
    if(img) { 
    return createPortal(
    <div className="overlay" onClick={handleBackdropClick}>
   
    <div className="modal">
    <img src={img} alt="" />
    
    </div> 
  </div>, modalRoot)}}

