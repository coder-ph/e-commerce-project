import React, { useState } from "react";
import NavBar from "../Pages/NavBar";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ItemForm({ items, setItems, id }) {
  const [addItem, setAddItem] = useState({
    name: "",
    price: 0,
    category: "",
    image: "",
    shortDescription: "",
    detailedDescription: "",
    highlights: "",
  });

  function handleChange(e) {
    setAddItem({
      ...addItem,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name: addItem.name,
      price: addItem.price,
      category: addItem.category,
      image: addItem.image,
      shortDescription: addItem.shortDescription,
      detailedDescription: addItem.detailedDescription,
      highlights: addItem.highlights,
    };

    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((r) => r.json())
      .then((newItem) => setItems([...items, newItem]));
  }



  return (
    <div>
      <NavBar />
      <div className="shadow-lg p-3 mb-5 bg-body rounded promo">
        <h1>Add new item to the catalogue</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter item name"
          />
          <br />
          <br />
          <input
            className="input"
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="Enter the price of the item"
          />
          <br />
          <br />
          <input
            className="input"
            onChange={handleChange}
            name="category"
            type="text"
            placeholder="Enter the category of the item"
          />
          <br />
          <br />
          <input
            className="input"
            onChange={handleChange}
            name="image"
            type="Url"
            placeholder="Enter the url of the item"
          />
          <br />
          <br />
          <input
            className="input"
            onChange={handleChange}
            type="text"
            name="shortDescription"
            placeholder="Enter a short description of the item"
          />
          <br />
          <br />
          <input
            className="input"
            onChange={handleChange}
            type="text"
            name="detailedDescription"
            placeholder="Enter detailed description of the item"
          />
          <br />
          <br />
          <input
            className="input"
            onChange={handleChange}
            type="text"
            name="highlights"
            placeholder="Enter the key highlights of the item"
          />
          <br />
          <br />
          <button className="btn btn-primary shadow" type="submit">
            Submit Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default ItemForm;
