import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Todo({ crnt_user }) {

  let navigate = useNavigate()

  let [todo , settodo] = useState("")
  console.log(todo);

  let todo_add = async () => {
    try{
     let res = await axios.post("http://localhost:4500/todo" , todo)

    }
    catch(err){

    }

  }

  return (
    <div className='w-full bg-white h-screen p-[.1px]'>
      <div className='w-full h-[50px] bg-green-500 flex items-center justify-between px-5 '>
        {/* <p className='text-white font-bold text-xl'> {` welcome ${crnt_user.user.firstName} ${crnt_user.user.lastName} ..`} </p> */}
        <button className='py-1 px-5 font-bold cursor-pointer active:scale-95 hover:scale-105 hover:bg-gray-800 transition-all duration-100 ease-in bg-black text-white rounded-xl' onClick={() => navigate("/")}>Log Out</button>
      </div>

      <div className='w-full h-max flex justify-center items-center gap-5 mt-20'> 
        <input className='w-[300px] h-[40px] bg-[whiteSmoke] rounded-2xl px-3 text-black tracking-[1px] outline-none border-2 border-transparent transition-all duration-200 ease-in-out focus:border-green-500 '
         placeholder='Type Here !' type="text" onChange={(e)=>{ settodo(e.target.value) }} value={todo} />
        <button className='py-1 px-5 rounded-xl bg-green-500 hover:bg-black text-white cursor-pointer transition-all duration-200 ease-in-out active:scale-95 ' onClick={todo_add} >Add</button>
      </div>
    </div>
  )
}

export default Todo