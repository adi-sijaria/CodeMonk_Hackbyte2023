import React from 'react'
import "./navbar1.css"
import { Link,Outlet } from 'react-router-dom'
import {BiHome} from "react-icons/bi"
import {HiOutlineUserCircle} from "react-icons/hi"
import {BsBellFill} from "react-icons/bs"
import {SiGooglemessages} from "react-icons/si"
import {CgProfile} from "react-icons/cg"
import {AiOutlineMore} from "react-icons/ai"


const Navbar1 = () => {
  return (
    <>
    <div className='full'>
  
    <div >
        <nav class="navbar">
  <ul class="navbar-nav">
    <li class="nav-item">
        <Link to='/home'>
      <a class="nav-link" href="#"><BiHome size={30}/></a>
      </Link>
    </li>
    <li class="nav-item">
        <Link to="/">
      <a class="nav-link" href="#"><HiOutlineUserCircle size={30}/></a>
      </Link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
      <BsBellFill size={30}/>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><SiGooglemessages  size={30}/></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><CgProfile size={30}/></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><AiOutlineMore size={30}/></a>
    </li>
  </ul>
</nav>
      
    </div>
    <Outlet/>
    </div>
    </>
   
    
  )
}

export default Navbar1
