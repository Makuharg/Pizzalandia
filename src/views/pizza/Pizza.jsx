import React, { useEffect, useState } from 'react'
import './pizza.css'


const Pizza = () => {
  const [pizza, setPizza] = useState({});
  

  useEffect(() => {
    getApi();
  }, [])
  

  const getApi = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas/p001");
    const pizza = await res.json();
    setPizza(pizza);
  }

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
          <h3 className='precio'>Precio: {pizza.price}</h3>
          <div className='btn'>
            <button className='button-pizza'>Añadir</button>
          </div>
        </div>
      </section>           
    </main>
  )
}

export default Pizza