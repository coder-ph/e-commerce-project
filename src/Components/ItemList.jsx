import React from "react";
import ItemCard from "./ItemCard";
import ItemSearch from "./ItemSearch";
import "../../src/App.css";

function ItemList({ items,  category,itemSearch, setItems}) {

  //  const filteredItems = items.filter((item) =>
  //    item.name.toLowerCase().includes(itemSearch.toLowerCase())
  //  );

   function handleDeleteItem(deletedItem) {
    const updateItems = items.filter((item) =>item.id !== deletedItem.id)
    setItems(updateItems)
   }

   function handleUpdatedItems(updatedItem){
    const updatedItems = items.map((item) => item.id === updatedItem.id? updatedItem:item)
    setItems(updatedItems)
   }

   const filteredItems = items.filter(
     (item) =>
       item.name.toLowerCase().includes(itemSearch.toLowerCase()) &&
       (category === "All" || item.category === category)
   );
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
            items = {items}
            setItems= {setItems}
            onDeleteItem = {handleDeleteItem}
            onUpdateItem = {handleUpdatedItems}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
