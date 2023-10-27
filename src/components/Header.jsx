import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toogleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='flex flex-wrap justify-between px-4 py-2 bg-blue-950 text-white'>
      <div>Logo</div>
      
      <nav className='flex flex-col items-center'>
        <button 
          className='sm:hidden text-xl'
          onClick={toogleNav} >
          <GiHamburgerMenu />
        </button>

        <ul className={`${isOpen ? 'block' : 'hidden'} sm:flex-row sm:flex flex flex-col items-center`}>
          <li>
            <NavLink to='' className={({isActive}) => 
            `
              py-2 pr-4 pl-3 ${isActive ? 'text-orange-400' : 'text-white'} font-bold hover:text-orange-400
            `}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({isActive}) => 
            `
              py-2 pr-4 pl-3 ${isActive ? 'text-orange-400' : 'text-white'} font-bold hover:text-orange-400
            `}>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({isActive}) => 
            `
              py-2 pr-4 pl-3 ${isActive ? 'text-orange-400' : 'text-white'} font-bold hover:text-orange-400
            `}>Contact</NavLink>            
          </li>
        </ul>
      </nav>
      <div>more buttons</div>
    </header>
  )
}

export default Header