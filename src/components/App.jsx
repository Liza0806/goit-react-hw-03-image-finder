import { ImageGallery } from "./ImageGallery";
import "./styles.css";
import { Component } from "react";
import { Searchbar } from "./Searchbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export class App extends Component {

state = {
  keyWord: "",
  //showLoadMoreBtn: false,
  //pageNumber: 1,
  }


handleFormSubmit = (keyWord) => {
 this.setState({ keyWord: keyWord,  pageNumber: 1})
  return keyWord}

 

//isLoadMoreBtnShown(bool){
 // this.setState({showLoadMoreBtn: bool})
//  }

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
 checkLastOfPages={this.checkLastOfPages} 
 pageNumber={this.state.pageNumber}

 // isLoadMoreBtnShown={(showLoadMoreBtn) => this.setState({ showLoadMoreBtn })}
 />


 <ToastContainer />

    </div>
  )}
};
