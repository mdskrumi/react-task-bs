import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Detail = ({ image }) => {
    console.log(useParams());
    return (
        <div className="ui container" >
            <div>
                <img width="502px" src={image.urls.regular} alt="img"></img>
                <p style={{ border: "2px solid black", padding: '10px' }}> {image.description || "Here is the description of the image"} </p>
            </div>
        </div>
    )

}

export default Detail;