import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


import Detail from './Detail';

const ImageList = (props) => {

  let { path, url } = useRouteMatch();


  const images = props.images.map((image) => {
    return (
      <div style={{ height: "500px",  padding: "10px" }} >
        <Link onClick={ ()=>{props.setImage(image)} } to={`/detail/${image.id}`}>  <img src={image.urls.regular} key={image.id} alt={image.description} /> </Link>
      </div>
    );
  });

  return <div> {images} </div>;
};

export default ImageList;
