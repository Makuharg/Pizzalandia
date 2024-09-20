import React, { useContext, useId } from 'react'
import { CartIcon, ClearCartIcon } from '../icons/Icons';
import './NewCart.css'
import { useCart } from '../../hooks/useCart';
import { MyUserContext } from '../../context/UserContext';


const NewCart = () => {
    const cartCheckboxId = useId();

    const { token } = useContext(MyUserContext)

    const { cart, clearCart, addToCart, updateQuantity, total }  = useCart()

    function CartItem (pizzas) {
        return (
            <li>
                <div>
                    <strong>{pizzas.name}</strong>
                </div>                    
                <img src={pizzas.img} alt="#" />
                <footer>
                    <small>
                    {pizzas.quantity} x ${pizzas.price} 
                    </small>
                    <button onClick={() => updateQuantity(pizzas.id, 1)}>+</button>
                    <button onClick={() => updateQuantity(pizzas.id, -1)}>-</button>
                </footer>
            </li>
        )       
    }

  return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden/>

        <aside className='cart'>
            <ul>
                {
                    cart.map(pizzas => (
                        <CartItem
                            key={pizzas.id}
                            addToCart={()=> addToCart(pizzas)}
                            {...pizzas}
                        />
                    ))
                }
            </ul>
            <div className='clear-total'>
                <p className='total-cart'>Total: ${total}</p>
                <button onClick={clearCart} className='clear-cart'>
                    <ClearCartIcon />
                </button>               
            </div>
            {
                token ? <button>Ir a pagar</button> : ""
            }
        </aside>
    </>
  )
}

export default NewCart