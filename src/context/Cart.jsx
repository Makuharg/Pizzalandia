import { createContext, useState } from "react";
import pizzas from '../assets/objetos/pizzas'

export const CartContext = createContext({})

export function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (pizzas) => {
        setCart((prevCart) => {
            // Verificar si la pizza ya está en el carrito
            const pizzaInCart = prevCart.find(item => item.id === pizzas.id);
            if (pizzaInCart) {
              // Si ya está, aumentar la cantidad
              return prevCart.map(item =>
                item.id === pizzas.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
            } else {
              // Si no está, agregarla con cantidad 1
              return [...prevCart, { ...pizzas, quantity: 1 }];
            }
          });
    } 

    // Función para aumentar la cantidad de un ítem en el carrito
    const updateQuantity = (pizzaId, amount) => {
        setCart((prevCart) =>
          prevCart
            .map(item =>
              item.id === pizzaId ? { ...item, quantity: item.quantity + amount } : item
            )
            .filter(item => item.quantity > 0) // Filtrar ítems cuya cantidad sea mayor que 0
        );
      };
   
      // Función para calcular el total del carrito
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toString();
    };

    const total = new Intl.NumberFormat().format(calculateTotal())

    // Funcion para limpiar el carrito
    const clearCart = () => {
        setCart([])
    }



    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, pizzas, updateQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}