import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import './styles.css';

const modalRoot = document.querySelector("#modal")

export class Modal extends Component {

  render(){
    const { image, onClose } = this.props;
    return createPortal(<div className="overlay">
    <div className="modal">
    <img src={image} alt="Large Image" />
          <button onClick={onClose}>Close</button>
    </div>
  </div>, modalRoot)}
}