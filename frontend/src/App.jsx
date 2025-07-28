import React, { useState } from 'react'
import bg_img from "./backiee-86333-landscape.jpg"
import { BrowserRouter, Route, Routes } from 'react-router'
import Sign_in from './Sign_in'
import Sign_up from './Sign_up'
import Todo from "./Todo"

function App() {

  let [lodaer, setloader] = useState(false)
  let [crnt_user, setcrnt_user] = useState(null)
  console.log(crnt_user);


  return (
    <div className='w-full min-h-screen select-none bg-black bg-center bg-cover flex justify-center items-center' style={{ backgroundImage: `url( ' ${bg_img}' )` }} >
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Sign_in lodaer={lodaer} setcrnt_user={setcrnt_user}/>} /> */}
          {/* <Route path='/sign_up' element={<Sign_up lodaer={lodaer} setcrnt_user={setcrnt_user} />} /> */}
          <Route path='/dashboard' element={<Todo crnt_user={crnt_user} />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App