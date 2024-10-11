import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App