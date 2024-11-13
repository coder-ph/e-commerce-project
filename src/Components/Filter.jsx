import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Filter({ setCategory }) {

  function handleFilter(e) {
    setCategory(e.target.value);
    
  }

  
  return (
    <div className="category">
      <select
        className="form-select"
        multiple
        aria-label="multiple select example "
        onChange={handleFilter}
        name="filter"
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Sports & Outdoors">Sports & Outdoors</option>
        <option value="Home Improvement">Home Improvement</option>
        <option value="Home & Office">Home & Office</option>
        <option value="Home & Bath">Home & Bath</option>
        <option value="Home & Bedroom">Home & Bedroom</option>
        <option value="Home & Appliances">Home & Appliances</option>
        <option value="Health & Personal Care">Health & Personal Care</option>
      </select>
    </div>
  );
}

export default Filter
