import React from 'react'
import './notFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    
    <div className='container'>
      <Link to="/"><div className='notFound'></div></Link>
    </div>
  )
}

export default NotFound