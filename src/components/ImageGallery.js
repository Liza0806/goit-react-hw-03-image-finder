import React from "react";
import "./styles.css";
import { ImageGalleryItem } from "./ImageGalleryItem";


export const ImageGallery = (props) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem keyWord={props.keyWord} />
    </ul>
  );
};