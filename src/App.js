import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import NotFound from './NotFound.js'

const App = () => {
  return (
    <div>
      <h1>Hello From react router</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App