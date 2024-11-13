import React, { useEffect, useState } from "react";
import ItemList from "../Components/ItemList";
import ItemCard from "../Components/ItemCard";
import NavBar from "./NavBar";
import ItemSearch from "../Components/ItemSearch";
import ItemForm from "../Components/ItemForm";
import Display from "../Components/Display";

function Home() {
  const [items, setItems] = useState([]);
  const [itemSearch, setItemSearch] = useState("");
  

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

  
  
  return (
    <div>
      <NavBar />
      <Display />
      <ItemSearch itemSearch={itemSearch} setItemSearch={setItemSearch} />
      <ItemList items={items} itemSearch={itemSearch} setItems={setItems} />
      
    </div>
  );
}

export default Home;
