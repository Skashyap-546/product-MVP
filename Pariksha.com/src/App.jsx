import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './Components/Index'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Createuser from './Components/Createuser'
import Users from './Components/Users'
import Editusers from './Components/Editusers'

function App() {
  
  return (
    <>
   <div>
    <BrowserRouter>
    <Index/>
    <Routes>
      <Route element={<Createuser/>} path="/"/>
      <Route element={<Users/>} path="/users"/>
      <Route element={<Editusers/>} path="/edit"/>
    </Routes>
    </BrowserRouter>
   </div>
   </>
  )
}

export default App
