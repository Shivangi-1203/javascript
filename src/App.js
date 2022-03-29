
import './App.css';
import React, { useState } from 'react';
function App() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  function alertMethod(){
   console.log(username, password)
  }

  return (
    <div className="bg-gray-700 h-screen flex justify-center self-center">
      <div className='bg-blue-500 rounded-xl flex h-2/4 p-8 my-60'>
        <form >
          <div className="p-4 text-white text-4xl font-semibold text-center">
            Login
          </div>
          <div className="p-3 text-lg font-semibold cursor-pointer">
            <label htmlFor="username" class="text-white">Username:</label><br />
            <input value={username} onChange={(e)=>setUserName(e.target.value)} className="border-2 focus:outline-none rounded bg-white cursor-pointer hover:border-blue-500" type="text" id="username" name="username" autocomplete="off"/>
          </div>
          <div className="p-3 text-lg font-semibold cursor-pointer">
            <label htmlFor="password" class="text-white">Password:</label><br />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className="border-2 focus:outline-none rounded bg-white cursor-pointer hover:border-blue-500" type="text" id="password" name="password" autocomplete="off"/>
          </div>
          <div className="p-3 mt-4 mx-2 rounded font-semibold text-center bg-white cursor-pointer hover:text-underline">
            <button onClick={alertMethod} className="w-auto text-gray-600 cursor-pointer hover:underline" type="button">Login</button>
          </div>
          <hr className="mt-12 mx-2 border-gray-600 h-0.5"></hr>
          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account?  </span>
            <span className="text-white cursor-pointer hover:underline" >Sign up</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
