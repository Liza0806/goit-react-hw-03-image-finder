// import { Button } from "./Button";
 import { ImageGallery } from "./ImageGallery";
 import "./styles.css";
// import { ImageGalleryItem } from "./ImageGalleryItem";
import { Loader } from "./Loader";
import { Modal } from "./Modal";
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
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
 <Searchbar onSubmit={this.handleFormSubmit}/>
 <Loader/>
 <ImageGallery keyWord={this.state.keyWord} showModal={this.viewLargeImg}/>
{this.state.showModal && <Modal />}
 <ToastContainer />
    </div>
  )}
};
