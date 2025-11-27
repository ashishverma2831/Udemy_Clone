import React from 'react'
import { companies_images } from '@/lib/companies'

const CompanyBanner = () => {
  return (
    <>
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

export default CompanyBanner