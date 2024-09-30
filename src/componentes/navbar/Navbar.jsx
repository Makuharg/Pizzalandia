import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";
import NewCart from '../../views/newCart/NewCart';
import { useCart } from '../../hooks/useCart';
import { MyUserContext } from '../../context/UserContext';

const Navbar = () => {

    const isActive = ({isActive}) => (isActive ? 'active' : 'notActive');

    // Importamos el valor total del carrito del cartContext
    const { total } = useCart()
    const { user, onClickHandler } = useContext(MyUserContext)
    console.log(user)


   
  return (
    <nav>
        <div className='left'>
            <Link to="/"><h3>Pizzería Mamma Mia!</h3></Link>
            {user?
                <ul>
                    <li><NavLink to="/" className={isActive}>🍕Home</NavLink></li>
                    <li><NavLink to="/profile" className={isActive}>🔓Profile</NavLink></li>
                    <li><NavLink to="/logout" className={isActive} onClick={onClickHandler}>🔒Logout</NavLink></li>                                             
                </ul>:
                <ul>
                    <li><NavLink to="/" className={isActive}>🍕Home</NavLink></li>
                    <li><NavLink to="/login" className={isActive}>🔐Login</NavLink></li>
                    <li><NavLink to="/register" className={isActive}>🔐Register</NavLink></li>                                                          
                </ul>
            }  
        </div>
        <div className='right'>
            <p>${total}</p>
            <NewCart></NewCart>          
        </div>
    </nav>
  )
}

export default Navbar