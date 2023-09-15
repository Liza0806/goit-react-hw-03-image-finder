import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import { AiOutlineClose } from "react-icons/ai";
import './styles.css';

const modalRoot = document.querySelector("#modal")

export class Modal extends Component {

  render(){
    const { onClose} = this.props;
    if(this.props.img) { 
    return createPortal(
    <div className="overlay" onClick={this.props.handleBackdropClick}>
   
    <div className="modal">

    <button className='buttonModal' onClick={onClose}><AiOutlineClose/></button>
    <img src={this.props.img} alt="" />
    
    </div> 
  </div>, modalRoot)}} }

