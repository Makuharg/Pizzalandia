import React, { useContext, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { MyUserContext } from '../../context/UserContext'

const Register = () => {
    const [confirm, setConfirm] = useState('')

    const { email, password, setEmail, setPassword, getRegister } = useContext(MyUserContext)

    const submitButton = (event) => {
        event.preventDefault()
        getRegister()

        if (password != confirm) {
            return alert("Las contraseñas no coinciden")
        } 
    }


    const emailInput = ({target}) => {
        const {value} = target
        setEmail(value)
    }

    const contraseñaInput = ({target}) => {
        const {value} = target
        setPassword(value);
    }  

    const confirmInput = ({target}) => {
        const {value} = target
        setConfirm(value);
    } 



  return (
    <main className='main-register'>
        <div className='form-register'>
            <h1>Registro</h1>


            <form onSubmit={submitButton}>
                <div className='username'>
                    <label>Nombre de usuario</label>
                    <input 
                    type="email"
                    placeholder='Ingrese mail'
                    name='mail'
                    onChange={emailInput}
                    value={email}
                    />
                </div>
                <div className='contraseña'>
                    <label>Contraseña</label>
                    <input 
                    type="password"
                    placeholder='Ingrese su contraseña'
                    name='contraseña'
                    onChange={contraseñaInput}
                    value={password}
                    />
                </div>
                <div className='contraseña'>
                    <label>Repita contraseña</label>
                    <input 
                    type="password" 
                    placeholder='Repita su contraseña'
                    name='confirm'
                    onChange={confirmInput}
                    value={confirm}
                />
                </div>
                <button type='submit' className='button-register'>Registrarse</button>
                <p className='iniciarSesion'>Quiero <Link to="/login"><a href="#">iniciar sesion</a></Link></p>
            </form>
        </div>
    </main>
  )
}

export default Register