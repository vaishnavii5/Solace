import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        < Route path='/' element={<Home />} />
        < Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App