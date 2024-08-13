import React from 'react'
import Header from '../header/Header'
import CardPizza from '../cardPizza/CardPizza'
import img from '../../assets/img/napolitana.jpeg'
import img2 from '../../assets/img/capresse.jpeg'
import img3 from '../../assets/img/pepperoni.jpeg'


const Home = () => {
  return (
    <>
    <Header></Header>
    <main>
      <CardPizza 
        img={img}
        titulo="Napolitana"
        precio={(5950).toLocaleString()}
        ingredientes={["🍕mozzarella", "tomates", "jamón", "orégano"].join(", ")}
      />
      <CardPizza
        img={img2}
        titulo="Capresse"
        precio={(6950).toLocaleString()}
        ingredientes={["🍕mozzarella", "tomates", "albahaca", "orégano"].join(", ")}
      />
      <CardPizza 
        img={img3}
        titulo="Pepperoni"
        precio={(6950).toLocaleString()}
        ingredientes={["🍕mozzarella", "pepperoni", "orégano"].join(", ")}
      />
    </main>
    </>
  )
}

export default Home