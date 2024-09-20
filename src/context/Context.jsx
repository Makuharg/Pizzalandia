import { createContext, useEffect, useState } from "react";

// 1. Crear el contexto
export const PizzasContext = createContext()

// 2. crear el Provider, para proveer el contexto

const PizzasProvider = ({ children }) => {
      const [pizzas, setPizzas] = useState([]);

      //Obtener api de las pizzas para el home
      const getPizzas = async ()=> {
        const res = await fetch("http://localhost:5000/api/pizzas")
        const data = await res.json()
        setPizzas(data);
      }
    
      useEffect(() => {
        getPizzas();
      }, [])
    
    return (
        <PizzasContext.Provider value={{ pizzas, setPizzas }}>
            {children}
        </PizzasContext.Provider>
    );
};

export default PizzasProvider;