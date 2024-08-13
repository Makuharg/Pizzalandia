import React, { useState } from 'react'
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState("")
    const [contra, setContra] = useState("")
    const [confirm, setConfirm] = useState("")

    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)

    const submitButton = (event) => {
        event.preventDefault()
        
        if (email.trim() === '' || contra.trim() === '' || confirm.trim() === '') {
            setError1(true)
            return
        }  else if (contra.length < 6) {
            setError2(true)
            return
        } else if (contra != confirm) {
            setError3(true)
            return
        }   else {
            alert("Registro exitoso")
            setEmail("")
            setContra("")
            setConfirm("")
        }
        setError1(false); 
        setError2(false); 
        setError3(false);
    }


    const emailInput = ({target}) => {
        const {value} = target
        setEmail(value)
    }

    const contraseñaInput = ({target}) => {
        const {value} = target
        setContra(value);
    }  

    const confirmInput = ({target}) => {
        const {value} = target
        setConfirm(value);
    } 

  return (
    <main>
        <div className='form'>
            <h1>Registro</h1>

                {error1 ? <h2>Complete todos los campos</h2> : null}
                {error2 ? <h2>La contraseña debe tener al menos 6 digitos</h2> : null}
                {error3 ? <h2>Las contraseñas no coinciden</h2> : null}

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
                    value={contra}
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
                <button type='submit'>Registrarse</button>
                <p className='iniciarSesion'>Quiero <a href="#">iniciar sesion</a></p>
            </form>
        </div>
    </main>
  )
}

export default Register