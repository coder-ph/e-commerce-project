import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';


function ItemDetails() {
    const params = useParams()
    const itemId = params.id
    console.log(params)

    const [items, SetItems] = useState({})

    useEffect(
        ()=>{
            fetch(`https://json-62e3.onrender.com/items${itemId}`)
              .then((r) => r.json())
              .then((data) => SetItems(data))
              .catch((error) => console.log(error));
        },[itemId]
    )
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <h2>{items.image}</h2>
      </main>
    </div>
  );
}

export default ItemDetails
