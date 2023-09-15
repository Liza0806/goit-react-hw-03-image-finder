// import { Button } from "./Button";
 import { ImageGallery } from "./ImageGallery";
 import "./styles.css";
// import { ImageGalleryItem } from "./ImageGalleryItem";
import { Loader } from "./Loader";
//import { Modal } from "./Modal";
import { Component } from "react"

import { Searchbar } from "./Searchbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export class App extends Component {
  state = {
    keyWord: "",
   showModal: false,
    backdroundImg: ""

  }
 handleFormSubmit = (keyWord) => {
 this.setState({ keyWord: keyWord })
    console.log(keyWord)

  return keyWord}

  viewLargeImg (bool){
    this.setState({showModal: bool})
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
 <Loader/>
 <ImageGallery keyWord={this.state.keyWord} showModal={this.viewLargeImg}/>

 <ToastContainer />
    </div>
  )}
};
