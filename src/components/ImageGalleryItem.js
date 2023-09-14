import React, { Component } from "react";
import "./styles.css";


export class ImageGalleryItem extends Component {

  state ={
    showModal: false
  }
  handleClick = (e, item) => {
    e.preventDefault();
    this.props.openModal(true, item.largeImageURL);
  };
  render() {
    console.log(this.props.pictures[0].pageURL)
    return (
      <div>
        {this.props.pictures &&
          this.props.pictures.map(item => (
          
            <li key={item.id} className="gallery-item"> <a href={item.largeImageURL} onClick={(e) => this.handleClick(e, item)} >
              <img src={item.pageURL} alt={item.id}  /></a> 
            </li>
          ))
        }
      </div>
    );
  }
}

