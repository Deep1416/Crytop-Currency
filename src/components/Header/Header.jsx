import React from 'react'
import logo from "./../../assets/konix.svg"

const Header = () => {
  return (
    <header>
        <nav className='flex justify-between py-3 px-8 bg-white'>
            <div className=''>
               <img src={logo} alt="" className = "w-20" />
            </div>
            <div>
                <ul className='flex items-center gap-6 font-semibold text-lg'>
                    <li>Features</li>
                    <li>Excahnges</li>
                    <li>How it Works?</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li><button className='border-2 border-blue-500 px-8 py-2 text-blue-500'>Sign In</button></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header