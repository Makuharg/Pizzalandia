import './Cart.css'
import { useState } from 'react';
import pizzas from "../../assets/objetos/pizzas";

const Cart = () => {
  const [pizzaList, setPizzaList] = useState(pizzas);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

   // Función para aumentar la cantidad de pizza
   const agregarAlCarrito = (pizza) => {
    setCart((prevState) => {
      const exist = prevState.find((x) => x.id === pizza.id);

      if (exist) {
        const updatedCart = prevState.map((x) =>
          x.id === pizza.id ? { ...exist, quantity: exist.quantity + 1 } : x
        );
        setTotal(calculateTotal(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [...prevState, { ...pizza, quantity: 1 }];
        setTotal(calculateTotal(updatedCart));
        return updatedCart;
      }
    });
  };

  // Función para disminuir la cantidad de pizza
  const eliminarDelCarrito = (pizza) => {
    setCart((prevState) => {
      const exist = prevState.find((x) => x.id === pizza.id);

      if (exist) {
        if (exist.quantity <= 1) {
          const updatedCart = prevState.filter((x) => x.id !== pizza.id);
          setTotal(calculateTotal(updatedCart));
          return updatedCart;
        } else {
          const updatedCart = prevState.map((x) =>
            x.id === pizza.id ? { ...exist, quantity: exist.quantity - 1 } : x
          );
          setTotal(calculateTotal(updatedCart));
          return updatedCart;
        }
      }
      return prevState;
    });
  };

  // Función para calcular el total
  const calculateTotal = (cart) => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  };

  const vaciarCarrito = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    
      <main className="cart">
        <section>
          <h1>Lista de pizzas</h1>
          <div className='product-list'>
            <ul>
              {pizzaList.map((pizza) => (
                <li key={pizza.id} className="cart-item">
                  <img src={pizza.img} alt={pizza.name} className="pizza-image" width={"300px"}/>
                  <div className="pizza-details">
                    <h2>{pizza.name}</h2>
                    <p>${pizza.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => eliminarDelCarrito(pizza)}>-</button>
                      <span>
                        {cart.find((x) => x.id === pizza.id)?.quantity || 0}
                      </span>
                      <button onClick={() => agregarAlCarrito(pizza)}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h1>Carrito de compras</h1>
          <div className='cart-list'>
            <ul>
              {cart.map((pizza) => (
                <li key={pizza.id} className="cart-item">
                  <div className="pizza-details">
                      <img src={pizza.img} alt="" width={"150px"}/>
                    {pizza.quantity > 0 ? (
                      <p>
                        {pizza.name} (${pizza.price}) x {pizza.quantity} = $
                        {pizza.price * pizza.quantity}
                      </p>
                    ) : null}
                  </div>
                  <button onClick={() => agregarAlCarrito(pizza)}>Agregar</button>
                  <button onClick={() => eliminarDelCarrito(pizza)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <div className="total">
              <h2>Total: ${total}</h2>
              <button onClick={()=> vaciarCarrito()}>Limpiar carrito</button>
              <button>Pagar el total</button>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Cart