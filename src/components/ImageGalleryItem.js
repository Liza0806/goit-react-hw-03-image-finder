import React, { Component, Fragment  } from "react";
import "./styles.css";


export class ImageGalleryItem extends Component {
  openModal = () => {
    this.props.getStateShowModal(true, )
  };
 


 // handleClick = (e, img) => {
 //   e.preventDefault();
 //   this.props.getStateShowModal(true, img)
 // };
  render() {
    return (
      <Fragment>
        {this.props.pictures &&
          this.props.pictures.map(item => (
            <li key={item.id} className="imageGalleryItem"> <a href={item.largeImageURL} onClick={(e) => {e.preventDefault();
              this.props.getStateShowModal(true, item.largeImageURL)}} >
              <img className="imageGalleryItem-image" src={item.webformatURL} alt={item.id}  /></a> 
            </li>
          ))
        }
     </Fragment>
    );
  }
}

