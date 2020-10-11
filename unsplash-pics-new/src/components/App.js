import React, { useState, useEffect } from "react";

import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";



const queryCache = new QueryCache();


const App = ({ setImage }) => {
  const [images, setImages] = useState([]);
  // const [error_msg, setErrorMsg] = useState("");
  const [term, setTerm] = useState("Bangladesh");


  const onSearchSubmit = (term) => {
    console.log(term);
    setTerm(term);
  };


  const { isLoading, error, response } = useQuery('Images', () =>
    fetch("https://api.unsplash.com/search/photos/?query=" + term, {
      method: "GET",
      headers: {
        Authorization: "Client-ID R4Q_V32stbrWOzb3DpOntSfstan64mljhm-QftIjSCY",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      }).then((response) => {
        setImages(response.results);
        console.log(response)
      })

  );

  if (error) {
    return <div>{'An error has occurred: ' + error.message}</div>
  }

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={onSearchSubmit} />
        <h4>Found: {images.length} Images</h4>
        <ImageList images={images} setImage={setImage} />
      </div>
    </ReactQueryCacheProvider>
  )


};

export default App;
