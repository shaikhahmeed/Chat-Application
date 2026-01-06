import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { IoChatbox, IoExit } from 'react-icons/io5'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='h-screen shadow-xl pr-6 flex flex-col w-72'>
         <p className='text-3xl font-bold text-indigo-950 mb-12'>ChatApp</p>
         <div className='flex flex-col gap-3'>
            <Link to={"pp"} className='bg-indigo-950 text-lg p-2.5 rounded-xl text-white flex items-center gap-2 justify-center'> <span><FaRegUser /></span> Profile</Link>
            <Link to={"/chat"} className='flex items-center gap-2 justify-center text-lg'> <span><IoChatbox /></span> Chat</Link>
            <Link to={"/group"} className='flex items-center gap-2 justify-center text-lg'> <span><FaUserGroup /></span> Group</Link>
         </div>
         <div className='flex gap-2.5 text-center items-center mt-auto text-lg p-2'>
            <div>
              <Link to={"/login"}>log out</Link>
            </div>
           <div className='mt-1'>
             <Link to={"/login"}><IoExit /></Link>
           </div>
         </div>
    </nav>
  )
}

export default Navbar