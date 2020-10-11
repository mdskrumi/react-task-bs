import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const Detail = () => {


    const [image, setImage] = useState({});

    const id = useParams().id;


    const { isLoading, error, data } = useQuery(['Image', id], async (_, params) => {
        const response = await fetch(`https://api.unsplash.com/photos/${params}`, {
            method: "GET",
            headers: {
                Authorization: "Client-ID R4Q_V32stbrWOzb3DpOntSfstan64mljhm-QftIjSCY",
            },
        });
        return response.json();
    }
    );


    useEffect(() => {
        if (!isLoading) {
            setImage(data);
        }

    }, [isLoading, data, image])

    if (error) {
        return <div>Some Error</div>
    }
    else if (isLoading) {
        return (
            <div className="ui container">
                <div className="ui active dimmer">
                    <div className="ui indeterminate text loader">Preparing Image</div>
                </div>
                <p></p>
            </div>
        )
    }
    return (
        // null
        <div className="ui container" >
            <div>
                <img width="502px" src={data.urls.regular} alt="img"></img>
                <p style={{ border: "2px solid black", padding: '10px' }}> {data.description || "Here is the description of the image"} </p>
            </div>
        </div>
    )

}

export default Detail;