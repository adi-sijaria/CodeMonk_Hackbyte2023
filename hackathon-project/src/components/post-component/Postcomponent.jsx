import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
// import { useEffect } from 'react'
import axios from 'axios'
import "./Postcomponent.css"
const demoposts = [
    {
        username: "aditya",
        category: "motivation",
        quote: "Dont stop until you are done"



    },
    {
        username: "aditya",
        category: "motivation",
        quote: "Dont stop until you are done"

    },
    {
        username: "aditya",
        category: "motivation",
        quote: "Dont stop until you are done"

    },
    {
        username: "suresh",
        category: "motivation",
        quote: " hfkjahsdkjfahksjdhfakjshdkfjahskdjfakdsf "

    }

]
const Postcomponent = () => {
    const [posts, setposts] = useState([])
    useEffect(()=>{
        setInterval(() => {
            const response = axios({
              url: "http://localhost:8000/api/fetchkicks",
              method: "GET"
            }).then((res) => {
            //   console.log(res.data)
              setposts(res.data)
             
            })
        }, 15000);
        // setposts(posts)
        console.log(posts,"posts")

    },[])


    return (
        <div className='post-container'>
            {posts.map((post) => {

                
                return (
                    <>
                        <div className='post-main-container'>
                            <div className='post-heading'>

                                <h3><FaUserCircle color='grey' />{post.user.name}</h3>
                                <h5 className='category'>{post.category}</h5>
                            </div>
                            


                            <div className='quote-component'>

                                <h4>{post.quote}</h4>
                            </div>

                        </div>
                    </>
                )
            })}


        </div>
    )
}

export default Postcomponent
