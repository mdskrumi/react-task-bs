import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  return (
    <div className="ui segment">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSearchSubmit(term);
        }}
        className="ui form"
      >
        <div className="field">
          <label htmlFor="search-bar"> Image Search: </label>
          <input
            id="search-bar"
            type="text"
            placeholder="Write Here"
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
