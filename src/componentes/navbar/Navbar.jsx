import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const total = 25000;
    const token = false;
  return (
    <nav>
        <div className='left'>
            <h3>Pizzería Mamma Mia!</h3>
            {token?
                <ul>
                    <li><a href="#">🍕Home</a></li>
                    <li><a href="#">🔓Profile</a></li>
                    <li><a href="#">🔒Logout</a></li>
                </ul>:
                <ul>
                    <li><a href="#">🍕Home</a></li>
                    <li><a href="#">🔐Login</a></li>
                    <li><a href="#">🔐Register</a></li>
                </ul>
            }  
        </div>
        <div className='right'>
            <a href="#">🛒Total: </a>${total.toLocaleString()}
        </div>
    </nav>
  )
}

export default Navbar