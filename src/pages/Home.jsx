import React from 'react'
import ChatList from '../component/ChatList'
import { MdOutlineVideoCall } from 'react-icons/md'
import { IoCall } from 'react-icons/io5'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Home = () => {
  return (
    <>
    <div className='flex w-full'>
      <div className='w-1/4'>
        <ChatList/>
      </div>
                            {/* chatbox */}
      <div className='w-3/4'>
        {/* <p className='text-secondary text-lg font-medium flex justify-center items-center'>Select a freind for start your conversation</p> */}
        <div className='pb-3 shadow-xl flex justify-between items-center mr-3'>
          <div className='flex items-center gap-2'>
          <div>
           <img src="/profile.png" alt="profile" className='h-12 w-12'/>
          </div>
          <div className='flex flex-col'>
          <p className='text-lg text-secondary'>Name</p>
          </div>
          </div>
          <div className='flex gap-4 text-lg'>
            <p className='cursor-pointer'><IoCall /></p>
            <p className='cursor-pointer'><MdOutlineVideoCall /></p>
            <p className='cursor-pointer'><BsThreeDotsVertical /></p>
          </div>
        </div>
        <div className='mt-4 p-6 flex flex-col gap-5'>
            {/* sender */}
            <p className=' bg-slate-200 rounded-xl text-brand px-4 py-2 font-medium w-fit max-w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, provident.</p>
            {/* receiver */}
            <p className='bg-slate-200 rounded-xl ml-auto text-brand px-4 py-2 font-medium w-fit max-w-4/5'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home