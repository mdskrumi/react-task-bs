import React from "react";

import {
  Link
} from "react-router-dom";




const ImageList = ({ images }) => {

  return images.map((image) => {
    return (
      <div key={image.id} style={{ height: "500px", padding: "10px" }} >
        <Link to={`/detail/${image.id}`}>  <img src={image.urls.regular} key={image.id} alt={image.description} /> </Link>
      </div>
    );
  });

};

export default ImageList;
