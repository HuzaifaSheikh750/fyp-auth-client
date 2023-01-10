import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Secret from './pages/Secret'
import './App.css'
import "react-toastify/dist/ReactToastify.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Secret />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App