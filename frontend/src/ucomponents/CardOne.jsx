import React from 'react'

const CardOne = () => {
  return (
    <>
        <div href='#' className='border-[1.5px] flex flex-col gap-2 hover:bg-gray-200/50 hover:cursor-pointer w-[520px] m-2 p-4 rounded-xl border-gray-300'>
            <img src="src/assets/course_photo.png" className='w-full rounded-lg' alt="course image" />
            <h2 className='font-semibold text-lg'>Learn Python Programming Masterclass</h2>
            <div className='flex gap-2 text-sm text-gray-500'>
                <span className='text-yellow-500 font-bold border-[1.5px] p-1 rounded border-gray-300'> ★ <span className='text-gray-500 font-normal'>4.7</span></span>
                <span className='text-gray-600 border-[1.5px] p-1 rounded border-gray-300'>(120,456)</span>
                <span className='border-[1.5px] p-1 rounded border-gray-300'>88 total hours</span>
            </div>
        </div>
    </>
  )
}

export default CardOne