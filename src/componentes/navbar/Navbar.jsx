import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false)

    
    const token = false;
  return (
    <nav>
        <div className='left'>
            <Link to="/"><h3>Pizzería Mamma Mia!</h3></Link>
            {token?
                <ul>
                    <Link to="/"><li><a href="#">🍕Home</a></li></Link>
                    <Link to="/profile"><li><a href="#">🔓Profile</a></li></Link>
                    <Link to="/"><li><a href="#">🔒Logout</a></li></Link>                                             
                </ul>:
                <ul>
                    <Link to="/"><li><a href="#">🍕Home</a></li></Link>
                    <Link to="/login"><li><a href="#">🔐Login</a></li></Link>
                    <Link to="/register"><li><a href="#">🔐Register</a></li></Link>                                                           
                </ul>
            }  
        </div>
        <div className='right'>
            <Link to="/cart"><a href="#" onClick={()=> setActive(!active)}>🛒Total: </a>$</Link>            
        </div>
    </nav>
  )
}

export default Navbar