import React from 'react'

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

    </>
  )
}

export default DisplayHeader