import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstPage from './Components/FirstPage'
import Register from './Components/Register'
import Login from './Components/Login'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/firstPage' element={<FirstPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App