import React from "react";
import ItemCard from "./ItemCard";
import ItemSearch from "./ItemSearch";
import "../../src/App.css";

function ItemList({ items, itemSearch, setItems}) {

   const filteredItems = items.filter((item) =>
     item.name.toLowerCase().includes(itemSearch.toLowerCase())
   );

   function handleDeleteItem(deletedItem) {
    const updateItems = items.filter((item) =>item.id !== deletedItem.id)
    setItems(updateItems)
   }
  return (
    <div>
      <div className="my-item">
        {filteredItems.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            price={item.price}
            sdescript={item.shortDescription}
            image={item.image}
            id = {item.id}
            item = {item}
            setItems= {setItems}
            onDeleteItem = {handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
