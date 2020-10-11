import React, { useState, useEffect } from "react";
import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';


import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const queryCache = new QueryCache();
const App = () => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");

  const onSearchSubmit = (term) => {
    console.log(term);
    setTerm(term);
  };

  const { isLoading, error, data } = useQuery(['Images', term], async (key, params = "", ...rest) => {

    // console.log("key :" + key);
    // console.log("paras: " + params);
    // console.log(...rest);

    const queryString = (params === "")
      ? "https://api.unsplash.com/photos"
      : `https://api.unsplash.com/search/photos/?query=${params}`;


    console.log(queryString);

    const response = await fetch(queryString, {
      method: "GET",
      headers: {
        Authorization: "Client-ID R4Q_V32stbrWOzb3DpOntSfstan64mljhm-QftIjSCY",
      },
    });
    return response.json();
  }
  );

  useEffect(() => {
    if (data && term === "") {
      setImages(data);
    } else if (data && data.results) {
      setImages(data.results);
    }
    return () => {
      queryCache.clear();
    }
  }, [isLoading, data, term])


  if (error) {
    return <div>{'An error has occurred: ' + error.message}</div>
  }
  else if (isLoading) {
    return (
      <div className="ui container">
        <div className="ui active dimmer">
          <div className="ui indeterminate text loader">Preparing Images</div>
        </div>
        <p></p>
      </div>
    )
  }

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={onSearchSubmit} />
        <ImageList images={images} />
      </div>
    </ReactQueryCacheProvider>
  )


};
export default App;
