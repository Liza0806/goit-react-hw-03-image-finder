import { Component } from "react"
import { toast } from "react-toastify";
import "./styles.css";

export class Searchbar extends Component {
  state = {
    keyWord: "",
  }
handleSubmitStateKeyWord = (e) => {
  e.preventDefault()
  let inputValue = e.target.elements.searchInput.value.toLowerCase();

if(inputValue.trim() === ""){
 return toast.error("Get name")
}

this.props.onSubmit(inputValue);
e.target.elements.searchInput.value = ""
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