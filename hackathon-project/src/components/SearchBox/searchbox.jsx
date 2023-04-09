import React from 'react'
import { useState } from 'react'
import {AiOutlineSend} from "react-icons/ai"
import "./search.css"
import axios from 'axios'

const Searchbox = () => {
  const [quote,setquote]=useState('');
  const onsubmit=async()=>{
    await axios({
      method:'post',
      url:'http://localhost:8000/api/studentview',
      data: {
        name:'',
        quote:quote,
        // category:

      }
  }).then((response)=>{
      console.log(response.data)

  })
  }

  
  return (
    <div className='search-box-container'>
      <input type="text"  className='search-box' placeholder='Enter your kick to' value={quote} onChange={(event)=>setquote(event.target.value)}/>
      <AiOutlineSend color='blue' size={40} className='addnote-button' onClick={onsubmit}/>
    </div>
  )
}

export default Searchbox
