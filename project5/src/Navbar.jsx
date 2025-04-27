import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    
    <div className='nav'>
      <h1 className='head'>Portfolio.</h1>
     <ul>
        <li className='list'>
            <Link to='/Home' className='link1'>Home</Link>
        </li>

          <li className='list'>
          <Link to='/About' className='link'>About</Link>
          </li>

          <li className='list'>
          <Link to='/Skills'className='link'>Skills</Link>
          </li>

          <li className='list'>
          <Link to='/Project'className='link'>Project</Link>
          </li>


          <li className='list'>
          <Link to='/Contact'className='link'>Contact</Link>
          </li>

     </ul>





    </div>
  )
}

export default Navbar