import React from 'react'
import { useState } from "react";

function ItemSearch({itemSearch, setItemSearch}) {

    function handleSearch(e){
        setItemSearch(e.target.value)
    }
  return (
    <div>

      <input onChange={handleSearch} type="text" name="search" id='search' placeholder="Search for an item" value = {itemSearch}></input>
    </div>
  );
}

export default ItemSearch
