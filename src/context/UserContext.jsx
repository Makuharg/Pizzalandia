import { createContext, useEffect, useState } from "react";

export const MyUserContext = createContext();

export const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getLogin = async () => {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
    const data = await res.json();

    alert(data?.error || 'Acceso permitido')
    setToken(data.token)
    localStorage.setItem('token', data.token)
    }

    const getRegister = async () => {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
    const data = await res.json();

    if (data.error) {
      alert(data.error)
      setToken(false)
      setUser(false)
    } else {
      setToken(data.token);
      alert("Usuario registrado con exito")
    }
    
    localStorage.setItem('token', data.token)
    }

    useEffect(() => {
      const tokenStorage = localStorage.getItem('token')

      if(tokenStorage) {
        fetch('http://localhost:5000/api/auth/me', {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        .then((response)=> response.json())
        .then((data)=> setUser(data))
        .catch((error)=> console.log(error))
      }    
    }, [token])

    const onClickHandler = ()=> {
      setUser(false);
      localStorage.removeItem('token', 'email')
    }
    

  return (
    <MyUserContext.Provider value={{ email, setEmail, password, setPassword, getLogin, getRegister, user, setUser, onClickHandler }}>
        {children}
    </MyUserContext.Provider>
  )
}


export default UserContext
