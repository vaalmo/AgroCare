import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { CropsPage } from './pages/CropsPage'
import { CropFormPage } from './pages/CropFormPage'
import { Navigation } from './components/Navigation'
import { Toaster} from 'react-hot-toast'

function App () {
  return (
    <BrowserRouter>
  <div className='container mx-auto'>
    <Navigation />
    <Routes>
      <Route path="/" element={<Navigate to="/crops"/>} />
      <Route path="/crops" element={<CropsPage/>} />
      <Route path="/crops-create" element={<CropFormPage/>} />
      <Route path="/crops/:id" element={<CropFormPage/>} />
    </Routes>
    <Toaster/>
  </div>
    </BrowserRouter>

  )
}

export default App