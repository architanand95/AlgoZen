import React from 'react'
import Image from 'next/image'
import Me from "../../../public/images/profile-pic.png"

const ImageSection = () => {
  return (
      <div className='bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl md:w-[70%]  '>
        <div className='rounded-3xl rotate-3 ' >
          <Image src={Me} alt="archit" height={600} className='rounded-2xl' />
        </div>
      </div>
  )
}

export default ImageSection