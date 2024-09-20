import './App.css'
import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./componentes/navbar/Navbar"
import Home from './views/home/Home'
import Footer from './componentes/footer/Footer'
import Register from './views/register/Register' 
import Login from './views/login/Login' 
import Pizza from './views/pizza/Pizza'
import NotFound from './views/notFound/NotFound'
import Profile from './views/profile/Profile'
import PizzasProvider from './context/Context'
import { CartProvider } from './context/Cart/'
import { MyUserContext } from './context/UserContext'
import LogOut from './views/logout/LogOut'
import { useContext, useState } from 'react'

function App() {

  const {token}  = useContext(MyUserContext)
  
  return (

      <CartProvider>
        <PizzasProvider>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={token? <Navigate to="/" /> : <Login />}/>
              <Route path='/register' element={token? <Navigate to="/" /> : <Register />}/>
              <Route path='/pizza/:id' element={<Pizza />}/>
              <Route path='*' element={<NotFound />}/>
              <Route path='/profile' element={token? <Profile /> : <Navigate to="/login" />}/>
              <Route path='/logout' element={token? <LogOut /> : <Navigate to="/"/>}/>
            </Routes>
          <Footer />
        </PizzasProvider>
      </CartProvider>
  )
}

export default App
