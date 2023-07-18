import React from 'react'
import {IoTimerOutline} from "react-icons/io5"

const Infobar = () => {
  return (
    <div className='bg-[#F0ECF1] p-3 rounded-lg'>
    <p className='font-medium text-left mb-3 text-lg mx-3'>Step <span className='text-xl'>2</span>/<span className='text-gray-600'>3</span></p>
    <div className='flex justify-between p-3'>
        <img src={"/assets/hydroalcoholic-gel.png"} className='w-20' alt="" />
        <div className='flex flex-col justify-evenly w-[60%] items-start'>
            <p className='text-left text-xl font-medium'>Cleansing</p>
            <div className='flex justify-between w-full'>
                <span className='flex gap-2 text-lg items-center'><IoTimerOutline className='text-[#6C3E77]'/><span>60 sec</span></span>
                <span className='text-[#6C3E77] font-semibold'>How to do</span>
            </div>
        </div>
    
    </div>
</div>
  )
}

export default Infobar
