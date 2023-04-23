import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom' 
import Home from '../Pages/Home'
import About from '../Pages/About'
import './App.css'
import "./server"
import Layout from '../Components/Layout'
import Vans from '../Pages/Vans/Vans'
import VansDetails from '../Pages/Vans/VansDetails'
import Dashboard from '../Pages/Host/Dashboard'
import Income from '../Pages/Host/Income'
import Reviews from '../Pages/Host/Reviews'
import HostVans from '../Pages/Host/HostVans'
import HostVanDetails from '../Pages/Host/HostVanDetails'
import HostLayout from '../Components/HostLayout'
import HostVanInfo from '../Pages/Host/HostVanInfo'
import HostVanPricing from '../Pages/Host/HostVanPricing'
import HostVanPhotos from '../Pages/Host/HostVanPhotos'
import NotFound from '../Pages/NotFound'


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VansDetails />} />

        <Route path="host" element={<HostLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
