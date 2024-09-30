import React, { useContext } from 'react'
import './Profile.css'
import  img  from '../../assets/img/perfil.jpg'
import { MyUserContext } from '../../context/UserContext'
 
const Profile = () => {

  const { user, onClickHandler } = useContext(MyUserContext)
  
  return (
    <main className='main-profile'>
      <section className='card-profile'>
        <div className='img-profile'>
          <img src={img} alt="imagen de Marcos" />
        </div>
        <div className="text-data">
          <span className='name'>Marcos Gonzalvez</span>
          <span className='job'>Front End Developer</span>
          <span>{user.email}</span>
        </div>
        <div className='media-buttons'>
          <a href="#" className='link'>
            <i className='bx bxl-github'></i>
          </a>
          <a href="#" className='link'>
            <i className='bx bxl-linkedin'></i>
          </a>
        </div>
        <div className='button-profile'>
          <button onClick={onClickHandler}>Cerrar Sesion</button>
        </div>
      </section>
    </main>
  )
}

export default Profile