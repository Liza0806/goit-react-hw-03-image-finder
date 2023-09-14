import React, { Component } from "react";
import "./styles.css";

const myKey = '38602994-963aa75bc12682ba48659a817';

export class ImageGalleryItem extends Component {
  state = {
    pictures: null,
    keyWord: this.props.keyWord,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyWord !== this.props.keyWord) {
      this.fetchData();
    }
  }

  fetchData() {
    fetch(
      `https://pixabay.com/api/?q=${this.props.keyWord}&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => {
        if (response.ok) {
          console.log(`https://pixabay.com/api/?q=${this.props.keyWord}&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`)
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
      });
  }

  render() {
    return (
      <div>
        {this.state.pictures &&
          this.state.pictures.map(item => (
            <li key={item.id} className="gallery-item">
              <img src={item.pageURL} alt={item.id} />
            </li>
          ))
        }
      </div>
    );
  }
}