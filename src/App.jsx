import './App.css'
import { Route, Routes } from "react-router-dom"
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

function App() {

  return (
    <CartProvider>
      <PizzasProvider>
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
      </PizzasProvider>
    </CartProvider>
  )
}

export default App
