import React from 'react'
import Progressbar from '../components/Progressbar'
import Infobar from '../components/Infobar'

const Timer = () => {
  return (
    <div className='w-[40%] mx-auto h-full p-5 my-auto flex flex-col justify-center gap-10'>
    <div className='p-3'>
    <p className='text-2xl font-semibold my-3'>Routing starting in</p>
    <p className="text-gray-500">Subheading here</p>
    </div>
    <Progressbar/>
    <Infobar/>
    </div>
  )
}

export default Timer