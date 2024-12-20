import { useState } from 'react'
import "./style.css"
import {Route, Routes} from "react-router-dom"
import GameCenter from './pages/GameCenter'
import Home from './pages/Home'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>

      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gameCenter" element={<GameCenter/>}/>
      </Routes>
      </div>

      
    </>
  )
}

export default App
