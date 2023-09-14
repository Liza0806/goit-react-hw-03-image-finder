import React, { Component } from "react";
import "./styles.css";


export class ImageGalleryItem extends Component {
  state = {
   pictures: this.props.pictures,
    keyWord: this.props.keyWord,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyWord !== this.props.keyWord) {
      this.props.fetchData();
    }
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