import React from 'react'
import "./UserCard.css"

import {CgProfile} from "react-icons/cg"

const UserCard = ({name,about}) => {
  return (
    <div class="user-profiles">
  {/* <h1>User Profiles</h1> */}
  <div class="user">
    <img src="https://via.placeholder.com/50x50" alt="John Smith's avatar"/>
    <div class="user-info">
      <h2>{name}</h2>
      <p>{about.slice(0,25)}..</p>
    </div>
  </div>
  
</div>

  )
}

export default UserCard
