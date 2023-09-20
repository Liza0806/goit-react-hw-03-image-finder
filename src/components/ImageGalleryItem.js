import React, { Fragment, useState  } from "react";
import { Modal } from "./Modal";
import "./styles.css";

export const ImageGalleryItem = ({pictures}) => {
  const [showModal, setSowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null)
 const  openModal = (img) => {
  setSelectedImage(img);
   setSowModal(true);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setSowModal(false);
    };
  
    return (
      <Fragment>
        {pictures &&
          pictures.map(item => (
            <li key={item.id} className="imageGalleryItem"> 
            <a href={item.largeImageURL} onClick={(e) => {e.preventDefault();
              openModal(item.largeImageURL)}} >
              <img className="imageGalleryItem-image" src={item.webformatURL} alt={item.id}  /></a> 
            </li>
          ))
        }
        {showModal && <Modal img={selectedImage} closeModal={closeModal}/>}
     </Fragment>
    );
  
}
