import React, { useEffect, useState } from "react";
import ItemList from "../Components/ItemList";
import ItemCard from "../Components/ItemCard";
import NavBar from "./NavBar";
import ItemSearch from "../Components/ItemSearch";
import ItemForm from "../Components/ItemForm";
import Display from "../Components/Display";
import Filter from "../Components/Filter";

function Home() {
  const [items, setItems] = useState([]);
  const [itemSearch, setItemSearch] = useState("");
  const [category, setCategory] = useState('All')
  

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
      <Filter category={category} setCategory={setCategory}/>
      <ItemList items={items} category={category} itemSearch={itemSearch} setItems={setItems} />
    </div>
  );
}

export default Home;
