import React from 'react'

const Profile = () => {
  return (
    <div className='flex gap-2 justify-center items-center'>
        <div className='max-w-60'>
            <img src="/profile.png" alt="profile" className='w-fit'/>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-6xl'>User Name</h1>
            <p className='text-2xl'>**********@gmail.com</p>
            <p className='text-2xl'>+8801*********</p>
            <p className='text-2xl'>Bio</p>
        </div>
    </div>
  )
}

export default Profile