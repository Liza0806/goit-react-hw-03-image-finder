import { ImageGallery } from "./ImageGallery";
import "./styles.css";
import { Component } from "react";
import { Searchbar } from "./Searchbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {LoadMoreBtn} from './Button';


export class App extends Component {

state = {
  keyWord: "",
  showLoadMoreBtn: false,
  pageNumber: 1,
  }


handleFormSubmit = (keyWord) => {
 this.setState({ keyWord: keyWord,  pageNumber: 1})
  return keyWord}

viewLargeImg (bool){
  this.setState({showModal: bool})
  }


  loadMore = () => {
    this.setState((prevState) => ({
      pageNumber: prevState.pageNumber + 1
    }));
  }

isLoadMoreBtnShown(bool){
  this.setState({showLoadMoreBtn: bool})
  }

render () {
 
return (
    <div
    style={{
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "16px",
    paddingBottom: "24px"
      }}
    >
 <Searchbar onSubmit={this.handleFormSubmit}/>
 <ImageGallery 
 keyWord={this.state.keyWord} 
 showModal={this.viewLargeImg} 
 pageNumber={this.state.pageNumber} 
 checkLastOfPages={this.checkLastOfPages} 
 isLoadMoreBtnShown={(showLoadMoreBtn) => this.setState({ showLoadMoreBtn })}/>
{this.state.keyWord !== "" && this.state.showLoadMoreBtn && <LoadMoreBtn loadMore={this.loadMore}/>}

 <ToastContainer />

    </div>
  )}
};
