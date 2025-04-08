

import React from 'react'

function Heading({title, subtitle}) {
  return (
    <>
    <div className='heading'>
      <h1 className='text-blue-950 dark:text-gray-300 font-bold text-4xl'>{title}</h1>
      <p className=' text-gray-600 dark:text-gray-300 text-base mb-4 mt-4'>{subtitle}</p>
    </div>
    </>
  )
}

export default Heading