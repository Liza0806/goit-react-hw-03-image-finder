import React, { Component } from "react";
import "./styles.css";


export class ImageGalleryItem extends Component {

  state ={
    showModal: false
  }
  handleClick = (e) => {
    e.preventDefault()
   
    this.props.openModal(true)
  };
  render() {
    console.log(this.props.pictures[0].pageURL)
    return (
      <div>
        {this.props.pictures &&
          this.props.pictures.map(item => (
          
            <li key={item.id} className="gallery-item"> <a href={item.largeImageURL} onClick={this.handleClick} >
              <img src={item.pageURL} alt={item.id}  /></a> 
            </li>
          ))
        }
      </div>
    );
  }
}

