import React from 'react'
import { useContext } from 'react';
import { StepperContext } from '../contexts/StepperContext';


export default function Payment() {
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const{name, value} = e.target ;
    setUserData({...userData,[name]:value});
  };
  return (
    <div className="flex flex-col ">      
      <div className="mx-2 w-full flex flex-row">
        <div className="mt-3 mr-2 w-1 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          1
        </div>
        <div className="my-2 w-full flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Example 1"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex flex-row">
        <div className="mt-3 mr-2 w-1 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          2
        </div>
        <div className="my-2 w-full flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Example 2"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex flex-row">
        <div className="mt-3 mr-2 w-1 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          3
        </div>
        <div className="my-2 w-full flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Example 3"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      {/* <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Password
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Password"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div> */}
    </div>
  )
}
