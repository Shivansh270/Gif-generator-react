import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'


const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <nav className='p-5 pb-0 flex flex-wrap sm:justify-center justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <NavLink to="/">
          <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded-md dark:bg-gray-50 dark:text-gray-900'>
            Google 2.O
          </p>
        </NavLink>

        <button className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? 'Light' : 'Dark'}
        </button>
      </div>
      <Search/>
    </nav>
  )
}

export default Navbar
