import React from 'react'
import {ImageCard, ButtonCard} from "./CardsProductsStyles"
import "./cardProductStyles.css";

function CardProduct({id,nombre,precio,img}) {
  return (
    <div className='card'>
      <img className='card-img' src={img}/>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <ButtonCard>Comprar</ButtonCard>
    </div>
  )
}

export default CardProduct