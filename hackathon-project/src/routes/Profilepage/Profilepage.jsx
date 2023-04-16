import React from 'react'
import "./Profilepage.css"
import { useContext } from 'react'
import { UserContext } from '../../context/authcontext/Auth.context'

import { FaUserEdit } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Profilepage = () => {
  const { currentUser } = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <div class="container2">

      <div className='user-profile'>

        <h1 className='name'>Name: {currentUser.name}</h1>
        <h2 className='about-heading'>About:</h2>
        <p className='about'>{currentUser.about}</p>
      </div>
      <div className='icon'>
        <Link to='/editpage'>

          <FaUserEdit onClick={() => navigate("/editpage")} size={30} color='orange' style={{ float: "right" }} />
        </Link>
      </div>
    </div>
  )
}

export default Profilepage
