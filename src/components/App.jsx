import { ImageGallery } from "./ImageGallery";
import "./styles.css";
import { Component } from "react";
import { Searchbar } from "./Searchbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchData } from "services/Services";
import {LoadMoreBtn} from './Button';
import { BallTriangle } from 'react-loader-spinner'
import { Error } from "./Error"; 


export class App extends Component {

state = {
  keyWord: "",
  pageNumber: 1,
  pictures:[],
  perPage: 12,
  status:"idle",
  showLoadMoreBtn: false,
  error: null,
  }


handleFormSubmit = (keyWord) => {
 this.setState({ 
  keyWord: keyWord,  
  pageNumber: 1,
  pictures: [],
  status: "pending",
  
})
this.fetchData(keyWord, 1, this.state.perPage);
  return keyWord}

  async fetchData(keyWord, pageNumber, perPage) {
 try {
     const data = await fetchData(keyWord, pageNumber, perPage);

   const showLoadMoreBtn = this.checkLastOfPages(data.hits.length, perPage);

     this.setState({
       pictures: [...this.state.pictures, ...data.hits],
       status: "resolved",
       showLoadMoreBtn: showLoadMoreBtn,
    });
  } catch (error) {
    this.handleFetchError()
    this.setState({ error, status: "rejected" });
   }
 }
handleFetchError = (error) => {

     this.setState({ error, status: "rejected" });
   }
   handleLoadMore = (newPageNumber) => {
    this.setState({ 
      pageNumber: newPageNumber,
      status: "pending"
     }, () => {
      this.fetchData(this.state.keyWord, newPageNumber, this.state.perPage);
    });
  };

  checkLastOfPages = (countOfPictures, perPage) => {
       return countOfPictures>=perPage
      }

render () {
  const {status} = this.state;

  if (status === "idle") { 
       return (
  <div className="app"> 
  <Searchbar onSubmit={this.handleFormSubmit}/>
  <ToastContainer />
  </div>)}
  
    if (status === "pending") { 
      return (
  <div className="app"> 
  <Searchbar onSubmit={this.handleFormSubmit}/>
  <div className="loader-container">
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
     </div>
  <ToastContainer />
        </div>)
      }
  
    if (status === "rejected") { 
      return (
        <div className="app"> 
  <Searchbar onSubmit={this.handleFormSubmit}/>
  <Error/>
  <ToastContainer />
        </div>
      )}
      if (status === "resolved") { 
        return(
        <div className="app">
 <Searchbar onSubmit={this.handleFormSubmit}/>
 <ImageGallery 
       pictures={this.state.pictures}
 />
{this.state.showLoadMoreBtn && <LoadMoreBtn onClick={() => this.handleLoadMore(this.state.pageNumber + 1)} />}
<ToastContainer />
    </div>
      ) }
  

}}
