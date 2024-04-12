import React from 'react'
import { NavLink } from 'react-router-dom'
function NavbarComponents() {
  return (
    <div className='container mx-auto flex justify-between items-center h-[120px]'>
        <h1 className='text-blue-500 uppercase text-4xl font-extrabold'>Redux</h1>

        <ul className='flex gap-6'>
            <li>
                <NavLink className='text-blue-300 uppercase text-[20px] hover:text-blue-700 transition-all' to={'/'}>Home</NavLink>
            </li>
            {localStorage.hasOwnProperty('redux_user')?<li>
                <NavLink className='text-blue-300 uppercase text-[20px] hover:text-blue-700 transition-all' to={'/profile'}>Profile</NavLink>
            </li> : <li>
                <NavLink className='text-blue-300 uppercase text-[20px] hover:text-blue-700 transition-all' to={'/register'}>Register</NavLink>
            </li> }

           
        
            
        </ul>
    </div>
  )
}

export default NavbarComponents