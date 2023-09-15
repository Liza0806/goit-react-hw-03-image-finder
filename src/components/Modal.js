import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import './styles.css';

const modalRoot = document.querySelector("#modal")

export class Modal extends Component {

  render(){
    const { onClose} = this.props;
    return createPortal(<div className="overlay" onClick={this.props.handleBackdropClick}>
    <div className="modal">

    <button onClick={onClose}>x</button>
    <img src={this.props.img} alt="" />
        
    </div>
  </div>, modalRoot)}
}