import React from 'react'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

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
    const [posts, setposts] = useState(demoposts)

    return (
        <div className='post-container'>
            {posts.map((post) => {
                return (
                    <>
                        <div className='post-main-container'>
                            <div className='post-heading'>

                                <h3><FaUserCircle color='grey' />  {post.username}</h3>
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
