// import { Button } from "./Button";
 import { ImageGallery } from "./ImageGallery";
 import "./styles.css";
// import { ImageGalleryItem } from "./ImageGalleryItem";
// import { Loader } from "./Loader";
 // import { Modal } from "./Modal";
import { Component } from "react"
import { Searchbar } from "./Searchbar";
import { ImageGalleryItem } from "./ImageGalleryItem";


export class App extends Component {
  state = {
    keyWord: ""
  }
 handleFormSubmit = (keyWord) => {
 this.setState({ keyWord: keyWord })
    console.log(keyWord)
  return keyWord}
  
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
 <ImageGallery keyWord={this.state.keyWord}/>

    </div>
  )}
};
