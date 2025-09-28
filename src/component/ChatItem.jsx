import React from 'react'

const ChatItem = () => {
  return (
    <div className='flex items-center gap-2'>
       <div>
         <img src="/profile.png" alt="profile" className='h-12 w-12'/>
       </div>
       <div className='flex flex-col'>
        <p className='text-lg text-secondary'>Name</p>
        <p className='text-sm text-brand'>Message</p>
       </div>
       <p className='text-sm text-secondary ml-auto'>10:40</p>
    </div>
  )
}

export default ChatItem