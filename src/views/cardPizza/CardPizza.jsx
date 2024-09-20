import React from 'react'
import './CardPizza.css'
import { Link, useNavigate } from "react-router-dom"
import { AddToCartIcon } from '../icons/Icons'
import { useCart } from '../../hooks/useCart'


const CardPizza = ({pizzas}) => {
    
    const { addToCart } = useCart()
    const ingredientes = pizzas.ingredients

    const navigate = useNavigate()

    const verPizza = () => {
        navigate(`/pizza/${pizzas.id}`)
    }
     
  return (
        <div className="card">
            <img src={pizzas.img} alt="pizza" />
            <h3 className='card-title'>Pizza {pizzas.name}</h3>
            <p className='desc'>{pizzas.desc}</p>
            <div className='ingr'>
                <p className='ingredientes'><strong>Ingredientes</strong>:</p>
                <ul>{ingredientes.map((ingre, index)=> <li key={index}>{ingre}</li>)}</ul>
            </div>
            <h3>Precio: ${pizzas.price?.toLocaleString()}</h3>
            <div className='btn'>
                <button className='btn1' type='submit' onClick={verPizza}><Link to="/pizza">Ver Más👀</Link></button>
                <button className='btn2' type='submit' onClick={()=> addToCart(pizzas)}>Añadir<AddToCartIcon /></button>
            </div>
        </div>
  )
}

// son una buena practica para saber que es lo
// que le estamos enviando a Card
/* CardPizza.propTypes = {
    pizzas: {
        id: propTypes.string,
        desc: propTypes.string,
        img: propTypes.string,
        ingredients: propTypes.string,
        name: propTypes.string,
        price: propTypes.string
    },
} */

export default CardPizza