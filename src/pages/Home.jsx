import React from 'react'
import ChatList from '../component/ChatList'
import { MdEmojiEmotions, MdOutlineVideoCall } from 'react-icons/md'
import { IoCall } from 'react-icons/io5'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { TfiGallery } from 'react-icons/tfi'
import { IoMdSend } from 'react-icons/io'

const Home = () => {
  return (
    <>
    <div className='flex w-full'>
      <div className='w-1/4'>
        <ChatList/>
      </div>
      {/* chatbox */}
      <div className='w-3/4 overflow-hidden h-screen'>
        {/* <p className='text-secondary text-lg font-medium flex justify-center items-center'>Select a freind for start your conversation</p> */}
        <div className='pb-3 shadow-xl flex items-center'>
          <div className='flex items-center gap-2'>
          <div>
           <img src="/profile.png" alt="profile" className='h-12 w-12'/>
          </div>
          <div className='flex flex-col'>
          <p className='text-lg text-secondary'>Name</p>
          </div>
          </div>
        </div>
        <div className='mt-4 pb-15 pl-2 flex flex-col gap-5 w-full h-full overflow-scroll'>
            {/* sender */}
            <p className=' bg-slate-200 rounded-xl text-brand px-4 py-2 font-medium w-fit max-w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, provident.</p>
            {/* receiver */}
            <p className='bg-slate-200 rounded-xl ml-auto text-brand px-4 py-2 font-medium w-fit max-w-4/5'>Lorem ipsum dolor sit amet.</p>
            <div className='flex justify-between p-2 bg-slate-200 w-full mt-auto'>
              <input type="text" placeholder='Chat here' className='outline-0 text-lg'/>
              <div className='flex gap-2 items-center text-lg'>
                <p><MdEmojiEmotions /></p>
                <p><TfiGallery /></p>
                <p><IoMdSend /></p>
              </div>
            </div>
        </div>
      </div>
    </div>  
    </>
  )
}

export default Home