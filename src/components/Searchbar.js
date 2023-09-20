import { useState } from "react"
import { toast } from "react-toastify";
import "./styles.css";

export const Searchbar =({onSubmit}) => {
  // state = {
  //   keyWord: "",
  // }
  const [keyWord, setKeyWord] = useState("")
const handleSubmitStateKeyWord = (e) => {
  e.preventDefault()
  console.log(keyWord)
  setKeyWord(e.target.elements.searchInput.value.toLowerCase())
let inputValue = e.target.elements.searchInput.value.toLowerCase();

if(inputValue.trim() === ""){
 return toast.error("Get name")
}

onSubmit(e.target.elements.searchInput.value.toLowerCase());
e.target.elements.searchInput.value = ""
}


    return (
    <header className="searchbar">
    <form className="form" onSubmit={handleSubmitStateKeyWord}>
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
  </header>)
}