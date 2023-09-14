import { Component } from "react"
import "./styles.css";

export class Searchbar extends Component {
  state = {
    keyWord: ""
  }
handleSubmitStateKeyWord = (e) => {
  e.preventDefault()
  const inputValue = e.target.elements.searchInput.value;

this.props.onSubmit(inputValue)
// console.log(this.state)
}


render (){
    return (
    <header className="searchbar">
    <form className="form" onSubmit={this.handleSubmitStateKeyWord}>
      <button type="submit" className="button">
        <span className="button-label">Search</span>
      </button>
  
      <input
      name="searchInput"
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>)}
}