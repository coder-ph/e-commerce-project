import React from 'react'
import { useState } from "react";
import "../../src/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ItemSearch({itemSearch, setItemSearch}) {

    function handleSearch(e){
        setItemSearch(e.target.value)
    }
  return (
    <div className="seach-card ">
      <input
        className="search shadow"
        onChange={handleSearch}
        type="text"
        name="search"
        id="search"
        placeholder="Search for an item"
        value={itemSearch}
      ></input>
    </div>
  );
}

export default ItemSearch
