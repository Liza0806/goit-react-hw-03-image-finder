import React, { Component } from 'react';
import {createPortal} from 'react-dom';
import './styles.css';

const modalRoot = document.querySelector("#modal")

export class Modal extends Component {
 
  handleBackdropClick = (e)=>{
    if (e.currentTarget === e.target){
    this.props.closeModal()
    }
    }
    

    handleKeyDown = (e) => {
      if (e.code==='Escape'){
        this.props.closeModal()
       }
    }
    
      componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount (){
    window.removeEventListener('keydown', this.handleKeyDown)
  }
  render(){
  
    if(this.props.img) { 
    return createPortal(
    <div className="overlay" onClick={this.handleBackdropClick}>
   
    <div className="modal">
    <img src={this.props.img} alt="" />
    
    </div> 
  </div>, modalRoot)}} }

