import { ImageGallery } from "./ImageGallery";
import "./styles.css";
import { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchData } from "services/Services";
import {LoadMoreBtn} from './Button';
import { BallTriangle } from 'react-loader-spinner'
import { Error } from "./Error"; 


export const App = () => {
const [keyWord, setKeyWord] = useState("");
const [pageNumber, setPageNumber] = useState(1);
const [pictures, setPictures] = useState([]);
const [perPage] = useState(12);
const [status, setStatus] = useState("idle");
const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
const [error, setError] = useState(null);



 async function handleFormSubmit(keyWord) {
  setKeyWord(keyWord);
  setPageNumber(1);
  setPictures([])
  setStatus("pending")
  return keyWord}
  
   async function handleLoadMore (newPageNumber) {
     setPageNumber(newPageNumber);
     setStatus("pending");
  };

  useEffect(()=> {
    async function fetchDataAndSetData() {
      try{
      const data = await fetchData(keyWord, pageNumber, perPage);
       console.log(data)
       setPictures([...pictures, ...data.hits]);
       setStatus("resolved")
       setShowLoadMoreBtn(checkLastOfPages(data.hits.length, perPage));
      }
      catch{
      setError(error);
      setStatus("rejected");
      }
      
    }
    if (status === "pending") {
      fetchDataAndSetData();
    } 
  }, [keyWord, pageNumber, perPage, status, error, pictures])
  const checkLastOfPages = (countOfPictures, perPage) => {
       return countOfPictures>=perPage
      }


 

  if (status === "idle") { 
       return (
  <div className="app"> 
  <Searchbar onSubmit={handleFormSubmit}/>
  <ToastContainer />
  </div>)}
  
    if (status === "pending") { 
      return (
  <div className="app"> 
  <Searchbar onSubmit={handleFormSubmit}/>
  <div className="loader-container">
  <BallTriangle
        height={300}
        width={300}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
     </div>
  <ToastContainer />
        </div>)
      }
  
    if (status === "rejected") { 
      return (
        <div className="app"> 
  <Searchbar onSubmit={handleFormSubmit}/>
  <Error/>
  <ToastContainer />
        </div>
      )}
      if (status === "resolved") { 
        return(
        <div className="app">
 <Searchbar onSubmit={handleFormSubmit}/>
 <ImageGallery 
       pictures={pictures}
 />
{showLoadMoreBtn && <LoadMoreBtn onClick={() => handleLoadMore(pageNumber + 1)} />}
<ToastContainer />
    </div>
      ) }
  

}
