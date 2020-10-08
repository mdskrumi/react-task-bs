import React from 'react'

export default function SelectProjectNum(props) {
    return (
      <div>
        <select onChange={(e) => {props.onNumberSelect(e.target.value)}} >
          <option value="4">4</option>
          <option value="8">8</option>
        </select>
      </div>
    );
  }