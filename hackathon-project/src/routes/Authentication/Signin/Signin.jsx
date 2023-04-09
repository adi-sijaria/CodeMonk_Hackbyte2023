import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./signin.scss"
import Button from '../../../components/button-component/button.component'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
// import jwt from 'jwt-decoder'
import  {Cookie}  from 'js-cookie'

const defaultdetails = {
  email: '',
  password: '',
  confirmpassword: ''

}
const Signin = () => {
  const cookies = new Cookies();

  const navigate = useNavigate();
  const [details, SetDetails] = useState(defaultdetails);
  const { email, password } = details
  const onHandlechange = (event) => {
    const { name, value } = event.target;
    SetDetails({ ...details, [name]: value });


  }
  const handleSubmit = async  () => {

    try {
      const data = {
        email,
        password
      }
      const results = await axios.post("http://localhost:8000/api/login", data)
      // const decoded=jwt(results.data.jwt)
      // console.log(decoded)
      console.log('hello')
      cookies.set('jwt', results.data.jwt, {path: '/ ' });
      // console.log(Cookie.get('jwt'));

    } catch (error) {
      console.log(error,"login error");
    }


navigate("/home")

  }



  return (
    <div className='sign-in-container'>


        <h1>Already have an Account!</h1>
        <input className='input' type='text' name='email' placeholder='enter your email' value={email} onChange={onHandlechange} />
        <br />
        <input className='input' type="password" name='password' placeholder='enter your password' value={password} onChange={onHandlechange} />
        <div className='button-flex'>
          <Button onClick={handleSubmit}>Sign-in</Button>
          <h1 className='division'>---------------------or--------------------</h1>
          <h1 className='division'>Dont have an account </h1>
          <Link className='linktosignout' to='/signup'>Signup</Link>
        </div>
    </div>
  )
}

export default Signin
