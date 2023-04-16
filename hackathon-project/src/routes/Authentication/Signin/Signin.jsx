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
  const resetFormFields = () => {
    SetDetails(defaultdetails);
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
     console.log(results.data.jwt)
      // navigate("/home")
      
      

    } catch (error) {
      console.log(error,"login error");
      
    }
    resetFormFields()


navigate("/home")

  }



  return (
    <>
    <div className="container pos">
		<div className="login-box">
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div className="textbox">
					<i className="fa fa-user" aria-hidden="true"></i>
					<input type="text" placeholder="Username" name="email" value={email} onChange={onHandlechange} required/>
				</div>

				<div className="textbox">
					<i className="fa fa-lock" aria-hidden="true"></i>
					<input type="password" placeholder="Password" value={password} name="password" onChange={onHandlechange} required/>
				</div>

				<input type="submit" className="btn"  />
        <br/>
        <hr/>
        <h><Link to='/signup'>signup</Link></h>
			</form>
		</div>
	</div>
  </>
  )
}

export default Signin
