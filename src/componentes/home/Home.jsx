import { useState, useEffect } from 'react'
import Header from '../header/Header'
import CardPizza from '../cardPizza/CardPizza'


const Home = ({agregarAlCarrito}) => {
  const [pizzas, setPizzas] = useState([])

  const getApi = async ()=> {
    const res = await fetch("http://localhost:5000/api/pizzas")
    const data = await res.json()
    setPizzas(data);
  }

  useEffect(() => {
    getApi();
  }, [])
  


  return (
    <>
    <Header></Header>
    <main>
      {pizzas.map((pizzas)=> <CardPizza key={`ID Principal: ${pizzas.id}`} pizzas={pizzas} agregarAlCarrito={agregarAlCarrito}/>)}
    </main>
    </>
  )
}



export default Home