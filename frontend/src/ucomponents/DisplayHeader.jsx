import React from 'react'
import { companies_images } from '@/lib/companies'

const DisplayHeader = () => {
  return (
    <>
        <section className='w-full p-4 bg-green-300/50 flex justify-center'>
            <div className='flex justify-center gap-2 items-center'>
                <h1 className='text-sm font-medium'>Black Friday Sale!</h1>
                <hr className=' h-full bg-black w-[1.5px]' />
                <p className='text-sm'> <a className='underline' href="#">Sitewide deals</a> from ₹399. Ends Nov 28.</p>
            </div>
        </section>
        
        <section className='bg-gray-200 p-12 gap-12 grid place-items-center'>
            <h3 className='text-lg text-gray-600'>Trusted by over 17,000 companies and millions of learners around the world</h3>
            <div className='flex gap-8'>
                {companies_images.map((src, index) => (
                    <img key={index} src={src} alt={`Company logo ${index + 1}`} className="h-10 mx-4" />
                ))}
            </div>
        </section>
    </>
  )
}

export default DisplayHeader