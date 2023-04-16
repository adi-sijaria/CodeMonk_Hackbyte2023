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
            {posts.map((post) => (
                <>
                    <div class="tweet-container">
                        <div class="tweet-header">
                            <img src="https://placehold.it/50x50" alt="Profile Picture"/>
                                <div class="user-info">
                                    <h4>{post.user.name}</h4>
                                    <p> #{post.category} </p>
                                </div>
                                <div class="post-time">
                                    <p>2 hours ago</p>
                                </div>
                            </div>
                        <div class="tweet-body">
                            <p>{post.quote}</p>
                        </div>
                        <div class="tweet-footer">
                            <button class="reply-button"><i class="fa fa-reply"></i> Reply</button>
                            <button class="retweet-button"><i class="fa fa-retweet"></i> Rekick</button>
                            <button class="like-button"><i class="fa fa-heart"></i> Like</button>
                            <button class="share-button"><i class="fa fa-share"></i> Share</button>
                        </div>
                    </div>
                </>
            ))}


        </div>
    )
}

export default Postcomponent
