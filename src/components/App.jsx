// import { Button } from "./Button";
 import { ImageGallery } from "./ImageGallery";
 import "./styles.css";
// import { ImageGalleryItem } from "./ImageGalleryItem";
import { Loader } from "./Loader";
 // import { Modal } from "./Modal";
import { Component } from "react"
import { Searchbar } from "./Searchbar";
const myKey = '38602994-963aa75bc12682ba48659a817';


export class App extends Component {
  state = {
    keyWord: "",
    status: "idle",
    pictures: ""

  }
 handleFormSubmit = (keyWord) => {
 this.setState({ keyWord: keyWord })
    console.log(keyWord)
  return keyWord}

  

  fetchData = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.state.keyWord}&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (response.ok) {
         
          console.log(`https://pixabay.com/api/?q=${this.state.keyWord}&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`)
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((data) => {
        console.log(data); // тут показывает массив данных
        this.setState({ pictures: data.hits }, () => {
          console.log(this.state.pictures); // тут должны быть данные
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });}
  
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
 <ImageGallery keyWord={this.state.keyWord}fetchData={this.fetchData} pictures={this.state.pictures}/>

    </div>
  )}
};
