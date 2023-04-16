import React from 'react'
import "./navbar1.css"
import { Link,Outlet } from 'react-router-dom'
import {BiHome} from "react-icons/bi"
import {HiOutlineUserCircle} from "react-icons/hi"
import {BsBellFill} from "react-icons/bs"
import {SiGooglemessages} from "react-icons/si"
import {CgProfile} from "react-icons/cg"
import {AiOutlineMore} from "react-icons/ai"

import {FaHistory} from "react-icons/fa"


const Navbar1 = () => {
  return (
    <>
    {/* <div className='full'> */}
  
    <div >
        <nav class="navbar">
          <h1 style={{color:'white', fontSize:'40px'}}>KICK</h1>
  <ul class="navbar-nav">
    <li class="nav-item">
        <Link to='/home'>
      <a class="nav-link" href="#"><BiHome size={40}/></a>
      </Link>
    </li>
    <li class="nav-item">
        <Link to="/">
      <a class="nav-link" href="#"><HiOutlineUserCircle size={40}/></a>
      </Link>
    </li>
    <li class="nav-item">
      <Link to="/history">

      <a class="nav-link" href="#">
      <FaHistory size={40}/>
      </a>
      </Link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><SiGooglemessages  size={40}/></a>
    </li>
    <li class="nav-item">
      <Link to="/profile">
      <a class="nav-link" href="#"><CgProfile size={40}/></a>
      </Link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><AiOutlineMore size={40}/></a>
    </li>
  </ul>
</nav>
      
    </div>
    <Outlet/>
    {/* </div> */}
    </>
   
    
  )
}

export default Navbar1
