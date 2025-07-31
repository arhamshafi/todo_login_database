import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const TodoList = React.memo(({ list }) => {
  console.log("Rendering TodoList...", list);
  return (
    <>
      {list.length === 0 ? (
        <p className='text-center text-black mt-30 font-bold'>No Any ToDo Here!</p>
      ) : (
        <div className='w-[500px] mx-auto mt-10 min-h-[300px]'>
          {list.map((ele, idx) => (
            <div
              key={idx}
              className='w-[90%] mx-auto h-[40px] rounded-xl mt-3 px-3 flex items-center justify-center bg-green-300 text-green-600 font-bold tracking-[2px] text-xl hover:scale-105 transition-all duration-200 capitalize ease-in-out'
            >
              {ele.todo}
            </div>
          ))}
        </div>
      )}
    </>
  );
});

function Todo({ crnt_user }) {
  const navigate = useNavigate();
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:4500/all_todo_list');
      setList(res.data.todo_list);
    } catch (err) {
      console.log('Error fetching todos:', err);
    }
  };

  const todo_add = async () => {
    try {
      if (todo.trim() === '') {
        alert('Fill it !! to proceed');
        return;
      }

      const res = await axios.post('http://localhost:4500/todo', { todo });
      console.log(res.data.not);

      fetchTodos();
      setTodo('');
    } catch (err) {
      console.log('Error in axios:', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='w-[80%] bg-white h-[80%] rounded-xl overflow-hidden'>

      <div className='w-full h-[50px] bg-green-500 flex items-center justify-between px-5'>
        <p className='text-white font-bold text-xl'>
          {`Welcome ${crnt_user.user.firstName} ${crnt_user.user.lastName} ..`}
        </p>
        <button
          className='py-1 px-5 font-bold cursor-pointer active:scale-95 hover:scale-105 hover:bg-gray-800 transition-all duration-100 ease-in bg-black text-white rounded-xl'
          onClick={() => navigate('/')}
        >
          Log Out
        </button>
      </div>


      <div className='w-full h-max flex justify-center items-center gap-5 mt-20'>
        <input
          className='w-[300px] h-[40px] bg-[whiteSmoke] rounded-2xl px-3 text-black tracking-[1px] outline-none border-2 border-transparent transition-all duration-200 ease-in-out focus:border-green-500'
          placeholder='Type Here !'
          type='text'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          className='py-1 px-5 rounded-xl bg-green-500 hover:bg-black text-white cursor-pointer transition-all duration-200 ease-in-out active:scale-95'
          onClick={todo_add}
        >
          Add
        </button>
      </div>


      <TodoList list={list} />
    </div>
  );
}

export default Todo;
