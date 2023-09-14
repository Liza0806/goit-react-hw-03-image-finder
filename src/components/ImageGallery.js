import React, { Component } from "react";
import "./styles.css";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { Modal } from "./Modal";
import { Error } from "./Error"; 


export class ImageGallery extends Component {

state= {
  pictures: [],
  status: "idle",
  error: null,
  showModal: false, 
  selectedImage: null,
}



fetchData = () => {
  const myKey = '38602994-963aa75bc12682ba48659a817';
  fetch(
    `https://pixabay.com/api/?q=${this.props.keyWord}&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((response) => {
      if (response.ok) {
        
        console.log("vvvvvvvvvnnnnnnvvvvvv")
        return response.json();
      }  
    })
    .then((data) => {
     
      if (data.hits.length === 0){
        return Promise.reject(new Error("No such images"))
      }
      console.log(data.hits)
      this.setState({ pictures: data.hits, status: "resolved" }); 
    })
    .catch((error) => { 
      console.log("aaaaaaaaaaaaa")
      console.error('Error fetching data:', error);
      this.setState({error, status: "rejected", })
    });
};


componentDidUpdate(prevProps) {
  if (prevProps.keyWord !== this.props.keyWord) {
    this.setState({status: "pending"})
    this.fetchData();
  }
}

openModal = (bool, img) => {
  this.setState({ showModal: bool, selectedImage: img });
};

closeModal = () => {
  this.setState({ showModal: false, selectedImage: null });
};
render() {
  const {status} = this.state;
  if (status === "idle") { 
    return <div>Start searching...</div>}
    if (status === "pending") { return <div>Loading...</div>}
    if (status === "rejected"){ return (<Error/>)}
    if (status === "resolved"){ return (
    <ul className="gallery">
      <ImageGalleryItem pictures={this.state.pictures}  openModal={this.openModal} />
     {this.state.showModal && 
          <Modal img={this.state.selectedImage} onClose={this.closeModal} />
      }
   

    </ul>)}

}
};
// image={this.selectedImage} onClose={this.closeModal}