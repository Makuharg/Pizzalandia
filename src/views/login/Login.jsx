import React, { useContext } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { MyUserContext } from '../../context/UserContext'

const Login = () => {

    const { email, setEmail, password, setPassword, getLogin } = useContext(MyUserContext)

    const submitButton = (e) => {
        e.preventDefault(e)
        getLogin();
    }

    const datosInput = ({target}) => {
        const {value, name} = target

        if (name === 'mail') {
            setEmail(value)
        }   else if (name === 'contraseña') {
            setPassword(value)
        }
    }


  return (
    <main className='main-form'>
        <div className='form'>
            <h1>Inicio de sesion</h1>
            <form action="" onSubmit={submitButton}>
                <div className='username'>
                    <label>Nombre de usuario</label> 
                    <input 
                        type="email"
                        placeholder='Ingresa tu mail' 
                        name='mail'
                        onChange={datosInput}
                        value={email}
                    />
                    
                </div> 
                <div className='contraseña'>
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        placeholder='Ingresa tu contraseña'
                        name='contraseña'
                        onChange={datosInput}
                        value={password}
                    />
                    
                </div>
                <p className='recordar'>¿Olvido su contraseña?</p>
                <button type="submit" className='button-login'>Iniciar Sesion</button>
                <p className='registrarse'>Quiero <Link to="/register"><a href="#">registrarme</a></Link></p>
            </form>
        </div>
    </main>
  )
}

export default Login