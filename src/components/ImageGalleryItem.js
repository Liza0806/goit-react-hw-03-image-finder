import React, { Component, Fragment  } from "react";
import { Modal } from "./Modal";
import "./styles.css";

export class ImageGalleryItem extends Component {
  state ={
    showModal: false,
    bigImg: null
  }
  openModal = (img) => {
   this.setState({
     showModal: true,
     selectedImage: img
   })
  };
  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
    };
 
  render() {
    return (
      <Fragment>
        {this.props.pictures &&
          this.props.pictures.map(item => (
            <li key={item.id} className="imageGalleryItem"> 
            <a href={item.largeImageURL} onClick={(e) => {e.preventDefault();
              this.openModal(item.largeImageURL)}} >
              <img className="imageGalleryItem-image" src={item.webformatURL} alt={item.id}  /></a> 
            </li>
          ))
        }
        {this.state.showModal && <Modal img={this.state.selectedImage} closeModal={this.closeModal}/>}
     </Fragment>
    );
  }
}
