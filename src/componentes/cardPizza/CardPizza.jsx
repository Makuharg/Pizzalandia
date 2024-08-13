import React from 'react'
import './CardPizza.css'

const CardPizza = ({img, titulo, ingredientes, precio}) => {
  return (
        <div className="card">
            <img src={img} alt="pizza" />
            <h3 className='card-title'>Pizza {titulo}</h3>
            <div>
                <p className='ingredientes'>Ingredientes:</p>
                <p>{ingredientes}</p>
            </div>
            <h3>Precio: ${precio}</h3>
            <div className='btn'>
                <button className='btn1' type='submit'>Ver Más👀</button>
                <button className='btn2' type='submit'>Añadir🛒</button>
            </div>
        </div>
  )
}

export default CardPizza