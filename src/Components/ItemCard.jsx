import React, { useState } from 'react'
import "../../src/App.css"

function ItemCard({onUpdateItem, name, price, image, sdescript, id, onDeleteItem, item, items}) {

        const[editedItem, setEditedItem] = useState({
            price:0,
            shortDescription: "",
        })
     function handleDelete() {
        console.log(id)
        fetch(`http://localhost:3000/items/${id}`,{
            method: 'DELETE',
            headers:{
                "Content-Type": "Application/json"
            }
        })
        .then(r=> r.json())
        .then(()=> onDeleteItem(item));
     }

    function handleEdit(e){
        e.preventDefault()
        console.log(item ,'edited')
        fetch(`http://localhost:3000/items/${id}`,{
            method: 'PATCH',
            headers:{
                "Content-Type": "Application/json"
            },
            body:JSON.stringify(editedItem)
        })
        .then((r)=>r.json())
        .then((updatedItem)=>{ onUpdateItem(updatedItem)
           
        });
    }

    function handleitemChange(e){
        const {name, value}= e.target; setEditedItem((prev) => ({...prev, [name]: value}))
    }
  return (
    <div className="cards">
      <div>
        <img src={image} alt={name} />
        <h3>${price}</h3>
        <p>{sdescript}</p>
      </div>
      <form onSubmit={handleEdit}>
        <input
          name="shortDescription"
          type="text"
          value={editedItem.shortDescription}
          onChange={handleitemChange}
          placeholder="short description"
          required
        />
        <input
          name="price"
          value={editedItem.price}
          onChange={handleitemChange}
          type="number"
          placeholder="enter price"
          required
        />
        <br></br>
        <button>Edit</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ItemCard
