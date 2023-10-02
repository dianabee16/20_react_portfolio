import React from 'react'
import {Link, Outlet} from "react-router-dom"
import "./root.css"

const Root = () => {
  return (
    <div>
        <ul className='nav'>
            <li className='nav-item'>
                <Link to="/" className='nav-link'>
                <span>
                    Home
                </span>
                </Link>
            </li>

            <li className='nav-item'>
                <Link to="/contact" className='nav-link'>
                <span>
                    Contact
                </span>
                </Link>
            </li>

            <li className='nav-item'>
                <Link to="/projects" className='nav-link'>
                <span>
                    Projects
                </span>
                </Link>
            </li>

            <li className='nav-item'>
                <Link to="/resume" className='nav-link'>
                <span>
                    Resume
                </span>
                </Link>
            </li>


        </ul>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Root

