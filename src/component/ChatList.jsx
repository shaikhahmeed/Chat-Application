import React from 'react'
import { CiSearch } from 'react-icons/ci'
import ChatItem from './ChatItem'

const ChatList = () => {
  return (
    <div className='shadow-xl pr-4 h-screen overflow-hidden'>
        <div className='flex gap-20 items-center'>
            <h2 className='text-primary text-lg'>Chat with your friends</h2>
            <button className='border-2 border-brand px-4 py-1 rounded-xl cursor-pointer text-primary'>Add</button>
        </div>
        <div className='flex gap-4 items-center p-2 border border-brand mt-8 rounded-xl'>
            <p><CiSearch /></p>
            <input type="text" placeholder='Search your friend'  className='outline-0'/>
        </div>
        <div className='mt-6 flex flex-col gap-1.5 h-full overflow-scroll cursor-pointer'>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
        </div>
    </div>
  )
}

export default ChatList