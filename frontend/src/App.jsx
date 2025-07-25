import React from 'react'
import bg_img from "./backiee-86333-landscape.jpg"
import { BrowserRouter, Route, Routes } from 'react-router'
import Sign_in from './Sign_in'

function App() {
  return (
    <div className='w-full min-h-screen select-none bg-black bg-center bg-cover flex justify-center items-center' style={{ backgroundImage: `url( ' ${bg_img}' )` }} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Sign_in/> } />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App