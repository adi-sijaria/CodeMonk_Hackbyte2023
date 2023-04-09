import React from 'react'
import "./UserCard.css"

import {CgProfile} from "react-icons/cg"

const UserCard = ({name,about}) => {
  return (
    <div className='user-card'>
        <h3><CgProfile color='grey'/> {name}</h3>
        <h4>{about} </h4>
        

      
    </div>
  )
}

export default UserCard
