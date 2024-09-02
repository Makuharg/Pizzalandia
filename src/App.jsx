import './App.css'
import { Route, Routes } from "react-router-dom"
import Navbar from "./componentes/navbar/Navbar"
import Home from './views/home/Home'
import Footer from './componentes/footer/Footer'
import Register from './views/register/Register' 
import Login from './views/login/Login' 
import Cart from './views/cart/Cart' 
import Pizza from './views/pizza/Pizza'
import NotFound from './views/notFound/NotFound'
import Profile from './views/profile/Profile'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route 
        path='/'
        element={<Home />}
        />
        <Route 
        path='/login'
        element={<Login />}
        />
        <Route 
        path='/register'
        element={<Register />}
        />
        <Route 
        path='/cart'
        element={<Cart />}
        />
        <Route 
        path='/pizza'
        element={<Pizza />}
        />
        <Route 
        path='*'
        element={<NotFound />}
        />
        <Route 
        path='/profile'
        element={<Profile />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
