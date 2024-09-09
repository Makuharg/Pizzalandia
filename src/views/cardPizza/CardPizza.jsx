import React, { useContext } from 'react'
import './CardPizza.css'
import { Link } from "react-router-dom"
import { AddToCartIcon } from '../icons/Icons'
import { useCart } from '../../hooks/useCart'
import { PizzasContext } from '../../context/Context'


const CardPizza = ({pizzas}) => {
    
    const { price } = useContext(PizzasContext)
    const { addToCart } = useCart()
    const ingredientes = pizzas.ingredients
     
  return (
        <div className="card">
            <img src={pizzas.img} alt="pizza" />
            <h3 className='card-title'>Pizza {pizzas.name}</h3>
            <p className='desc'>{pizzas.desc}</p>
            <div className='ingr'>
                <p className='ingredientes'><strong>Ingredientes</strong>:</p>
                <ul>{ingredientes.map((ingre, index)=> <li key={index}>{ingre}</li>)}</ul>
            </div>
            <h3>Precio: ${price}</h3>
            <div className='btn'>
                <Link to="/pizza"><button className='btn1' type='submit'>Ver Más👀</button></Link>
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