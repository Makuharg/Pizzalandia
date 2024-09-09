import Header from '../header/Header'
import CardPizza from '../cardPizza/CardPizza'
import { PizzasContext } from '../../context/Context'
import { useContext } from 'react'

const Home = () => {

  const { pizzas } = useContext(PizzasContext)

  return (
    <>
    <Header></Header>
    
      <main>     
        {pizzas.map((pizzas)=> <CardPizza key={`ID Principal: ${pizzas.id}`} pizzas={pizzas}/>)}               
      </main>
      
    </>
  )
}



export default Home