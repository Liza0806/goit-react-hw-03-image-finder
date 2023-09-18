import React, { Component } from "react";
import "./styles.css";
import { ImageGalleryItem } from "./ImageGalleryItem";

export class ImageGallery extends Component {

  state = {
    pictures: this.props.pictures
  }


  render(){ 
  return(
  <ul className="imageGallery">
 
    <ImageGalleryItem pictures={this.props.pictures} />
  
</ul>)}
 
}
