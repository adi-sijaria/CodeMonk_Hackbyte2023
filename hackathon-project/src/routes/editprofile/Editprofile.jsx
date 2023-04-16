import React from 'react'
import "./Editprofile.css"
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/authcontext/Auth.context'
import axios from 'axios'
const defaultdetails={
    username:'',
    about:''
}
const Editprofile = () => {
    const {currentUser}=useContext(UserContext)
    const [details,SetDetails]=useState(defaultdetails)
    const {username,about}=details
    const onHandlechange=(event)=>{
        const {value,name}=event.target
        SetDetails({...details,[name]:value})

    }
    const onSubmitchange=()=>{
         axios({
            method:'put',
            url:`http://localhost:8000/api/userupdate/${currentUser.id}/`,
            data: 
              {
                id:currentUser.id,
               name:username,
               about:about
            }
            
        }).then((response)=>{
            console.log(response.data)
      
        })


    }
  return (
    <div className='container3'>
        
		<h1>Edit Profile</h1>
		<form onSubmit={onSubmitchange}>
			<label for="name">Name:</label>
			<input type="text1" id="name" name="username" placeholder="Enter your name" value={username} onChange={onHandlechange} required/>
			<label for="about">About:</label>
			<textarea id="about" name="about" placeholder="Write something about yourself" value={about} onChange={onHandlechange}></textarea>
			<button type="submit">Save Changes</button>
		</form>

        
    </div>
  )
}

export default Editprofile
