import React from 'react'


import { Link, Outlet } from 'react-router-dom'
import "./navbar.css"

// import Cartdropdown from '../../Components/cartdropdown/Cartdropdown'

const Navigation = () => {
   
    // console.log(darkmode);
  return (
    <>
        <div className='navbar' >
            <div className='logo'>Thinkit</div>
            <ul className='nav-links'>
                <Link to='/' className='home'>
                    <li className='nav-text'>
                        Home
                    </li>
                </Link>
                 <Link to='/content' className='menu' >
                    <li   className='nav-text'>
                        content
                    </li>
                </Link>
                 <Link to='/signin' className='auth' >
                    <li  className='nav-text'>
                        Signin
                    </li>
                </Link>   
                
                
            </ul>
            {/* <CartItem/> */}

      
        </div>
        <Outlet/>
        
        </>

  )
}

export default Navigation
