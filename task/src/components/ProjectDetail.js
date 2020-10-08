import React from 'react';

export default function ProjectDetail(props){
    return (
        <div>
          <h4> {props.name} </h4>
          <img src={props.image} alt="logo" className={props.className} />
        </div>
      );
}