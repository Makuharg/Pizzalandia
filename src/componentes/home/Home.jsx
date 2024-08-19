import { useState } from 'react'
import Header from '../header/Header'
import CardPizza from '../cardPizza/CardPizza'
import pizzas from '../../assets/objetos/pizzas.js'


const Home = ({agregarAlCarrito}) => {
  const [pizza, setPizza] = useState(pizzas)

  return (
    <>
    <Header></Header>
    <main>
      {pizza.map((pizzas)=> <CardPizza key={`ID Principal: ${pizzas.id}`} pizzas={pizzas} agregarAlCarrito={agregarAlCarrito}/>)}
    </main>
    </>
  )
}



export default Home