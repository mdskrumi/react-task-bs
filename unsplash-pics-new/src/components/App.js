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




  const { isLoading, error, data } = useQuery('Images', async () => {
    const response = await fetch("https://api.unsplash.com/search/photos/?query=" + term, {
      method: "GET",
      headers: {
        Authorization: "Client-ID R4Q_V32stbrWOzb3DpOntSfstan64mljhm-QftIjSCY",
      },
    });
    return response.json();
  },
    {
      cacheTime: 0,
    }
  );


  useEffect(() => {
    if (data && data.results) {
      setImages(data.results);
      console.log(images);

    }
    return () => {
      queryCache.clear();
    }
  }, [isLoading, data])


  console.log(data);


  if (error) {
    return <div>{'An error has occurred: ' + error.message}</div>
  }

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={onSearchSubmit} />
        <ImageList images={images} setImage={setImage} />
      </div>
    </ReactQueryCacheProvider>
  )


};

export default App;
