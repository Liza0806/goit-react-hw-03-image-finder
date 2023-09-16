import React, { Component, Fragment } from "react";
import "./styles.css";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { Modal } from "./Modal";
import {LoadMoreBtn} from './Button';
import { Error } from "./Error"; 
import axios from "axios";
import { BallTriangle } from 'react-loader-spinner'




export class ImageGallery extends Component {

state= {
  pictures: [],
  status: "idle",
  error: null,
 
  selectedImage: null,
  perPage: 12,
  pageNumber: 1, 

  showModal: false, 
  showLoadMoreBtn: false, 
}

 standartPerPage = this.state.perPage
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
    const showLoadMoreBtn = this.checkLastOfPages(data.hits.length, this.standartPerPage); 
    if (data.hits.length === 0) {
      return Promise.reject(new Error("No such images"));
    } 
    this.setState(({
      pictures: data.hits,
      status: "resolved",
      showLoadMoreBtn: showLoadMoreBtn,
    }));

})
  .catch((error) => {
    console.error('Error fetching data:', error);
    this.setState({ error, status: "rejected" });
   
  })
};


componentDidUpdate(prevProps, prevState) {
  if (prevProps.keyWord !== this.props.keyWord) 
  {
    this.setState({
    status: "pending",
    pictures: [],
    pageNumber: 1,
    perPage: this.standartPerPage,  })

    this.fetchData();
  }

  if(prevState.pageNumber !== this.state.pageNumber){
    this.setState({
      status: "pending",
    })
  
  
      this.fetchData();
    }
}


// for load more button //

checkLastOfPages = (countOfPictures, perPage) => {
  return countOfPictures>=perPage
 }
 loadMore = () => {
  this.setState((prevState) => ({
    pageNumber: prevState.pageNumber + 1,
    perPage: prevState.perPage + this.standartPerPage, 
  }));
}

//////////////////


// functon for modal //
getStateShowModal = (bool, img) => {
this.setState({
  showModal: bool,
  selectedImage: img
})
}
    
closeModal = () => {
  this.setState({ showModal: false, selectedImage: null });

};

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
      <Fragment>
    
    <ul className="imageGallery">
      <ImageGalleryItem pictures={this.state.pictures} getStateShowModal={this.getStateShowModal}  />
     {this.state.showModal && this.state.selectedImage &&
          <Modal img={this.state.selectedImage} closeModal={this.closeModal}/>
      }
    </ul>
    { this.state.showLoadMoreBtn && <LoadMoreBtn loadMore={this.loadMore}/>}
    
    </Fragment>
    )}
}
};
