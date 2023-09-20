import React from "react";
import "./styles.css";
import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = ({pictures}) => {
  return(
  <ul className="imageGallery">
 
    <ImageGalleryItem pictures={pictures} />
  
</ul>)
 
}
