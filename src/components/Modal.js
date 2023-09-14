import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import './styles.css';

const modalRoot = document.querySelector("#modal")

export class Modal extends Component {

  render(){
    const { onClose} = this.props;
    return createPortal(<div className="overlay">
    <div className="modal">
    <img src={this.props.img} alt="" />
          <button onClick={onClose}>Close</button>
    </div>
  </div>, modalRoot)}
}