import React from 'react'

function Footer() {
  return (
    <footer className='flex flex-col bg-blue-950 text-white px-8 py-2 mt-auto'>
      <div className='flex flex-wrap sm:flex-nowrap'>
        <div className='mt-4'>
          <h3 className='text-orange-400 font-bold'>Section 1</h3>
          <p>Details....</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quo? Similique iste error repellat quod laboriosam aut atque recusandae officiis.</p>
        </div>

        <div className='mt-4'>
          <h3 className='text-orange-400 font-bold'>Section 2</h3>
          <p>Details....</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quo? Similique iste error repellat quod laboriosam aut atque recusandae officiis.</p>
        </div>
        
        <div className='mt-4'>
          <h3 className='text-orange-400 font-bold'>Section 3</h3>
          <p>Details....</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quo? Similique iste error repellat quod laboriosam aut atque recusandae officiis.</p>
        </div>
      </div>

      <p className='mt-4 mx-auto'>@copyright. All Rights Reserved</p>
    </footer>
  )
}

export default Footer