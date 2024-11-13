import React from 'react'
import "../../src/App.css"

function ItemCard({ name, price, image, sdescript, id, onDeleteItem, item}) {

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
  return (
    <div className='cards'>
      <div >
        <img src={image} alt={name} />
        <h3>${price}</h3>
        <p>{sdescript}</p>
      </div>
      <form >
        <input
          name="name"
          type="text"
          placeholder="short description"
          required
        />
        <input
          name="price"
          type="number"
          placeholder="enter price"
          required
        /> <br></br>
        <button>Edit</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ItemCard
