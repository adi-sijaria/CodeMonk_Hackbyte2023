import React from 'react'
import Searchbox from '../../components/SearchBox/searchbox'
import "./Home.css"
import { AiOutlineSearch } from "react-icons/ai"
import axios from 'axios'
import ChatComponent from '../../components/Chatcomponent/Chatcomponent'
import Postcomponent from '../../components/post-component/Postcomponent'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import UserCard from '../../components/userprofilecard.component/UserCard'
import { UserContext } from '../../context/authcontext/Auth.context'
 const defaultauth={
  id:null,
  name:'',
  email:'',
  about:''




}
const Home = () => {
  const{currentUser,setCurrentUser}=useContext(UserContext);
  
  const [Profiles, Setprofiledata] = useState([])
  // const [Auth, Setauth] = useState(defaultauth)
  console.log(currentUser,"authuser")


  useEffect(() => {
    setInterval(() => {
      const response = axios({
        url: "http://localhost:8000/api/getallprofile",
        method: "GET"
      }).then((res) => {
        console.log(res.data)
        Setprofiledata(res.data)
       
      })
  }, 15000);
  
    const response = axios({
      url: "http://localhost:8000/api/userview",
      method: "GET",
      withCredentials: true
    }).then((res) => {
      console.log(res.data,"baend se data")
      setCurrentUser(res.data)
    })

 


    

  }, []);


  return (
    <div className='whole-home-container'>
      <h4 style={{color:"white" ,textShadow: "1px 1px 1px 1px black"}}>Home</h4>
      <h3 style={{color:"white"}}> Welcome {currentUser.name}</h3>
      <hr />
      <div className='home-container full'>
        <div className='post'>

          {/* <Searchbox/> */}
          <ChatComponent />
          <Postcomponent />


        </div>
        <div className='filter'>
          <div className='search'>
            <input type='search' className='search-box1' placeholder='search kicks' />
            <AiOutlineSearch />
            {Profiles.map((profile) => {
              return (
                <>
                  <UserCard name={profile.name} about={profile.about} />
                </>

              )
            })}
          </div>


        </div>
      </div>


    </div>
  )
}

export default Home
