import './pizza.css'
import { useCart } from '../../hooks/useCart';
import { useContext } from 'react';
import { PizzasContext } from '../../context/Context';

const Pizza = () => {
  
  const { addToCart } = useCart()

  const { pizza, price } = useContext(PizzasContext)
  
  return (
    <main className='main-pizza'>
      <section id={pizza.id}>
        <img src={pizza.img} alt="#" />
        <div className='datos'>
          <h3>{pizza.name}</h3>
          <p>{pizza.desc}</p>
          <ul>
            🍕{pizza.ingredients?.join(" 🍕")}        
          </ul>
          <h3 className='precio'>Precio: {price}</h3>
          <div className='btn'>
            <button className='button-pizza' onClick={()=> addToCart(pizza)}>Añadir</button>
          </div>
        </div>
      </section>           
    </main>
  )
}

export default Pizza