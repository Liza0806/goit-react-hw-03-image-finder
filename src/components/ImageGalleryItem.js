import React, { Component, Fragment  } from "react";
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
    return (
      <Fragment>
        {this.props.pictures &&
          this.props.pictures.map(item => (
          
            <li key={item.id} className="imageGalleryItem"> <a href={item.largeImageURL} onClick={(e) => this.handleClick(e, item)} >
              <img className="imageGalleryItem-image" src={item.webformatURL} alt={item.id}  /></a> 
            </li>
          ))
        }
     </Fragment>
    );
  }
}

