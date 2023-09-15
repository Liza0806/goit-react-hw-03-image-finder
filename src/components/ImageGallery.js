import React, { Component} from "react";
import "./styles.css";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { Modal } from "./Modal";
import { Error } from "./Error"; 
import axios from "axios";
import { BallTriangle } from 'react-loader-spinner'




export class ImageGallery extends Component {

state= {
  pictures: [],
  status: "idle",
  error: null,
  showModal: false, 
  selectedImage: null,
  perPage: 12,
  showLoadMoreBtn: false,
    
  
}


fetchData = () => {
  const myKey = '38602994-963aa75bc12682ba48659a817';
  axios
  .get(`https://pixabay.com/api/`, {
    params: {
      q: this.props.keyWord,
      page: this.props.pageNumber,
      key: myKey,
      image_type: "photo",
      orientation: "horizontal",
      per_page: this.state.perPage,
    },
  })
  .then((response) => {
    if (response.status === 200) {
      return response.data;
    }
  })
  .then((data) => {
    const showLoadMoreBtn = this.checkLastOfPages(data.hits.length, this.state.perPage);
    if (data.hits.length === 0) {
      return Promise.reject(new Error("No such images"));
    }
  
  this.setState({
    pictures: data.hits,
    status: "resolved",
    showLoadMoreBtn: this.checkLastOfPages(data.hits.length, this.state.perPage),
  });
  this.props.isLoadMoreBtnShown(showLoadMoreBtn);
})
  .catch((error) => {
    console.error('Error fetching data:', error);
    this.setState({ error, status: "rejected" });
    this.props.isLoadMoreBtnShown(false);
  })
};


componentDidUpdate(prevProps) {
  if (prevProps.keyWord !== this.props.keyWord || prevProps.pageNumber !== this.props.pageNumber) {
    this.setState({status: "pending"})
    this.props.isLoadMoreBtnShown(false);
    this.fetchData();
  }
}
componentDidMount(){
  window.addEventListener('keydown', this.handleKeyDown)
}
componentWillUnmount (){
  window.removeEventListener('keydown', this.handleKeyDown)
}


checkLastOfPages = (countOfPictures, perPage) => {
  return countOfPictures>=perPage
 }

// functon for modal //

handleBackdropClick = (e)=>{
if (e.currentTarget === e.target){
  this.closeModal()
}
}
openModal = (bool, img) => {
  this.setState({ showModal: bool, selectedImage: img });

};

closeModal = () => {
  this.setState({ showModal: false, selectedImage: null });

};
handleKeyDown = (e) => {
  if (e.code==='Escape'){
    this.closeModal()
   }
}
///
render() {
  const {status} = this.state;

  if (status === "idle") { 
    return <div>Start searching...</div>}

  if (status === "pending") { 
    return    <div className="loader-container">
    <BallTriangle
      height={300}
      width={300}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  </div>}

  if (status === "rejected") { 
    return (<Error/>)}

  if (status === "resolved") { 
    return (

    <ul className="imageGallery">
      <ImageGalleryItem pictures={this.state.pictures}  openModal={this.openModal} />
     {this.state.showModal && 
          <Modal img={this.state.selectedImage} onClose={this.closeModal} handleBackdropClick={this.handleBackdropClick} />
      }
    </ul>
    )}
}
};
