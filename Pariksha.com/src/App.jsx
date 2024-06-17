import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Createuser from './Components/Createuser'
import Users from './Components/Users'
import Editusers from './Components/Editusers'

function App() {
  
  return (
    <>
   <div>
    <Home/>
   </div>
   </>
  )
}

export default App
