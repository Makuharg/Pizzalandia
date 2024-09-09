import { createContext, useEffect, useState } from "react";

// 1. Crear el contexto
export const PizzasContext = createContext()

// 2. crear el Provider, para proveer el contexto

const PizzasProvider = ({ children }) => {
      const [pizzas, setPizzas] = useState([]);
      const [pizza, setPizza] = useState({});

      //Obtener api de las pizzas para el home
      const getPizzas = async ()=> {
        const res = await fetch("http://localhost:5000/api/pizzas")
        const data = await res.json()
        setPizzas(data);
      }
    
      useEffect(() => {
        getPizzas();
      }, [])

      //Obtener api de las pizzas para el boton "ver mas"
      const getPizza = async () => {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const pizza = await res.json();
        setPizza(pizza);
      }
   
      useEffect(() => {
        getPizza();
      }, [])
    
      const price = new Intl.NumberFormat().format(pizza.price)
  
    return (
        <PizzasContext.Provider value={{ pizzas, setPizzas, pizza, setPizza, price }}>
            {children}
        </PizzasContext.Provider>
    );
};

export default PizzasProvider;