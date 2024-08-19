import React from 'react'
import './Login.css'
import { useState } from 'react'

const Login = () => {
    const email = "academialatam@gmail.com"
    const password = "AprendiendoReact123"

    const [mail, setMail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)

    const submitButton = (e) => {
        e.preventDefault(e)

        if (mail === "" || contraseña === "") {
            setError1(true)
            return
        }  else if (contraseña.length < 6) {
            setError3(true)
            setError1(false)
            return
        }  else if (mail != email || contraseña != password){
            setError2(true)
            setError1(false)
            setError3(false)
            return 
        }  else {
            setMail("")
            setContraseña("")
            setError1(false)
            setError2(false)
            setError3(false)
            alert("Ingresaste correctamente")
        }
    }

    const datosInput = ({target}) => {
        const {value, name} = target

        if (name === 'mail') {
            setMail(value)
        }   else if (name === 'contraseña') {
            setContraseña(value)
        }
    }


  return (
    <main>
        <div className='form'>
            <h1>Inicio de sesion</h1>
            {error1 ? <h2>Debes completar todos los campos</h2> : null}
            {error2 ? <h2>El email y/o contraseña son incorrectos</h2> : null}
            {error3 ? <h2>La contraseña debe tener mas de 6 digitos</h2> : null}
            <form action="" onSubmit={submitButton}>
                <div className='username'>
                    <label>Nombre de usuario</label> 
                    <input 
                        type="email"
                        placeholder='Ingresa tu mail' 
                        name='mail'
                        onChange={datosInput}
                        value={mail}
                    />
                    
                </div> 
                <div className='contraseña'>
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        placeholder='Ingresa tu contraseña'
                        name='contraseña'
                        onChange={datosInput}
                        value={contraseña}
                    />
                    
                </div>
                <p className='recordar'>¿Olvido su contraseña?</p>
                <button type="submit">Iniciar Sesion</button>
                <p className='registrarse'>Quiero <a href="#">registrarme</a></p>
            </form>
        </div>
    </main>
  )
}

export default Login