import React, { useState} from 'react'
import Navbar from './component/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './component/pages/Home'
import AboutUs from './component/pages/AboutUs'
import Adventures from './component/pages/Adventures'
import SignUp from './component/pages/SignUp'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/adventures' exact element={<Adventures />} />
        <Route path='/aboutUs' exact element={<AboutUs />} />
        <Route path='/sign-up' exact element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
