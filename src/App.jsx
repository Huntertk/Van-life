import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom' 
import Home from '../Pages/Home'
import About from '../Pages/About'
import Vans from '../Pages/Vans'
import VansDetails from '../Pages/VansDetails'
import './App.css'
import "./server"


function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VansDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
