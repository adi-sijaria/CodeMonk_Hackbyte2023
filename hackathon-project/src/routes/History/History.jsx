import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/authcontext/Auth.context'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./History.css" 
import UserCard from '../../components/userprofilecard.component/UserCard'


const History = () => {
    const {currentUser}=useContext(UserContext)
    const [history,sethistory]=useState([])
    console.log(currentUser.id,"history")
    useEffect(()=>{
        setInterval(() => {
            const response = axios({
              url: `http://localhost:8000/api/fetchuserhistory/${currentUser.id}/`,
              method: "GET",
              withCredentials: true
              
            }).then((res) => {
            //   console.log(res.data)
              sethistory(res.data)
            })
        }, 15000);
        // setposts(posts)
        console.log(history,"posts")

    },[])
  return (
    <div className='history-component'>
      <h1>Hi {currentUser.name} , here is your kick history</h1>
        {history.map((kick)=>{
            return(
                <>
                
               
                        <div className='post-main-container'>
                            <div className='post-heading'>

                                <h3>{kick.quote}</h3>
                                <h5 className='category'>{kick.category}</h5>
                            </div>
                            


                            <div className='quote-component'>

                                {/* <h4>{post.quote}</h4> */}
                            </div>

                        </div>
                   
                </>
            )

        })}
      
    </div>
  )
}

export default History
