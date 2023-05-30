import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'element={<Shop />}/>
          <Route path='/cart' element = {<Cart />}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App