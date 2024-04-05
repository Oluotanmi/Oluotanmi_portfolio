import React from 'react'
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return(
        <ul className='flex'>
          <li>
             <NavLink to='/'>
                 About
             </NavLink>
          </li>
          <li className='text'>
             <NavLink to='/Projects'>
                 Projects
             </NavLink>
          </li>
        </ul>
    )
}

export default Navigation;