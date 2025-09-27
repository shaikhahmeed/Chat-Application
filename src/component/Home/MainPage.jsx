import React from 'react'
import Profile from './Profile'

const MainPage = () => {
  return (
    <div>
        <div className='mb-8 mt-5'>
            <Profile/>
        </div>
     <div className="container m-auto px-4 py-8 max-w-md">
      <div className="grid grid-cols-2 gap-8"> 
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg text-white">
        <a href="#" className="text-xl font-semibold mb-2 cursor-pointer">User List</a>
      </div>

      
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg text-white">
        <a href="#" className="text-xl font-semibold mb-2 cursor-pointer">Friend List</a>
      </div>

      
      <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-lg p-6 shadow-lg text-white">
        <a href="#" className="text-xl font-semibold mb-2 cursor-pointer">Friend Request</a>
      </div>

      
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg p-6 shadow-lg text-white">
        <a href="#" className="text-xl font-semibold mb-2 cursor-pointer">Block List</a>
      </div>
    </div>
     </div>
    </div>
  )
}

export default MainPage