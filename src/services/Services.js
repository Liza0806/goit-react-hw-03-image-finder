import axios from "axios";

export const fetchData = (q, page, per_page) => {
    const myKey = '38602994-963aa75bc12682ba48659a817';
  
    return axios
      .get(`https://pixabay.com/api/`, {
        params: {
          q: q,
          page: page,
          key: myKey,
          image_type: "photo",
          orientation: "horizontal",
          per_page: per_page,
        },
      })
      .then((response) => {
        const data = response.data;
        
        if (data.hits.length === 0) {
          throw new Error("No images found");
        }
  console.log(data)
        return data;
      })
  };

  export const checkLastOfPages = (countOfPictures, perPage) => {
   return countOfPictures>=perPage
  }


