
import './App.css';

import React from 'react';
function App() {
  const alertMethod =() => {
    console.log("hello")
  }
  return (
    <div className="bg-green-500 h-screen flex justify-center self-center">
      <div className='bg-white rounded-xl flex h-2/4 p-8 my-60'>
        <form >
          <div className="p-4 text-2xl font-semibold text-center">
            Login
          </div>
          <div className="p-3 text-lg font-semibold cursor-pointer hover:underline">
            <label for="fname">Username:</label><br />
            <input className="border-2 focus:outline-none border-black cursor-pointer hover:border-green-500" type="text" id="fname" name="fname" />
          </div>
          <div className="p-3 text-lg font-semibold cursor-pointer hover:underline">
            <label for="fname">Password:</label><br />
            <input className="border-2 focus:outline-none border-black cursor-pointer hover:border-green-500" type="text" id="lname" name="lname" />
          </div>
          <div className="p-3 mt-4 mx-2 rounded-xl font-semibold text-center bg-green-500 cursor-pointer hover:bg-green-400">
            <button onClick={() => alertMethod()} type="button">Login</button>
          </div>
          <hr className="mt-9 mx-2 border-gray-600 h-0.5"></hr>
          <div className="text-center">
            <span>Don't have an account?  </span>
            <span className="text-purple-900 cursor-pointer hover:underline" >Sign up</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
