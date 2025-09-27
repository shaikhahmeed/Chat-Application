import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { IoChatbox, IoExit } from 'react-icons/io5'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='h-screen shadow-xl pr-6 flex flex-col'>
        <p className='text-3xl font-bold text-indigo-950 mb-12'>ChatApp</p>
         <div className='flex flex-col gap-3'>
            <Link to={"/profile"} className='bg-indigo-950 text-lg p-2.5 rounded-xl text-white flex items-center gap-2 justify-center'> <span><FaRegUser /></span> Profile</Link>
            <Link className='flex items-center gap-2 justify-center text-lg'> <span><IoChatbox /></span> Chat</Link>
            <Link to={"/group"} className='flex items-center gap-2 justify-center text-lg'> <span><FaUserGroup /></span> Group</Link>
         </div>
         <div className='flex gap-2.5 items-center justify-center mt-auto text-lg'>
            <Link to={"/login"}>log out</Link>
            <Link to={"/login"}><IoExit /></Link>
         </div>
    </nav>
  )
}

export default Navbar