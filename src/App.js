import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Intro from './pages/intro'
import Contact from './pages/contact'
import Login from './pages/login'
import ProducDetail from './pages/product-detail'
import Register from './pages/register'
import PageNoteFound from './pages/pageNotFound'
import Buy from './pages/buy'
import MyCart from './pages/my-cart'
import Orders from './pages/orders'
function App() {
  const name = localStorage.getItem('name')
  const isAdmin = localStorage.getItem('isAdmin')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/orders" element={<Orders />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        {localStorage.getItem('name') && <Route path="/my-cart" element={<MyCart />} />}
        {isAdmin === 'true' && 
          <Route path="/orders" element={<Orders />} />

        }

        {!name && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        <Route path="/product/:id" element={<ProducDetail />} />
        <Route path="/*" element={<PageNoteFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App