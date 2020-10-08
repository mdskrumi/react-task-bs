import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img src={image.urls.regular} key={image.id} alt={image.description} />
    );
  });

  return <div style={{ width: "150px", height: "150px" }}> {images} </div>;
};

export default ImageList;
