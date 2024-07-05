import React from 'react'
import Product from './CardProduct'
import { data } from "../../data/data";
import "./cardProductStyles.css";

function CardsProducts() {
  return (
    <div id='card-container'>
      {data.map((prod) => (
            <Product key={prod.id} nombre={prod.title} precio={prod.price} id={prod.id} img={prod.image}/>
        ))}
    </div>
  )
}

export default CardsProducts