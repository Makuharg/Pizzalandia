import './pizza.css'
import { useCart } from '../../hooks/useCart';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Pizza = () => {
  
  const { addToCart } = useCart()
  const [pizza, setPizza] = useState({});
  const { id } = useParams();
  
        //Obtener api de las pizzas para el boton "ver mas"


  useEffect(() => {
    const getPizza = async () => {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const pizza = await res.json();
      setPizza(pizza);
    } 
    getPizza();         
    }, [id])

    const price = pizza.price
        
  
  return (
    <main className='main-pizza'>
      <section id={pizza.id}>
        <img src={pizza.img} alt="#" className='img-pizza'/>
        <div className='datos'>
          <h3>{pizza.name}</h3>
          <p>{pizza.desc}</p>
          <ul>
            🍕{pizza.ingredients?.join(" 🍕")}        
          </ul>
          <h3 className='precio'>Precio: {price?.toLocaleString()}</h3>
          <div className='btn'>
            <button className='button-pizza' onClick={()=> addToCart(pizza)}>Añadir</button>
          </div>
        </div>
        
      </section>           
    </main>
  )
}

export default Pizza