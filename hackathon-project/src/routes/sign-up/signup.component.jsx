
import React from 'react'
import Forminput from '../../components/Form-input/form-input';


import { useState } from 'react';
import Button from '../../components/button-component/button.component';
import "./signup.scss"
import { useContext } from 'react';
import axios from 'axios';

import './signup.scss'
import { Link } from 'react-router-dom';
// import axios from 'axios';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  about:''
};



export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword,about } = formFields;



  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  // const signupfunction=async()=>{
  //   const userDocRef=await createAuthUserWithEmailAndPassword();

  // };
  const handleSubmit =async ()=>{
    await axios({
      method:'post',
      url:'http://localhost:8000/api/register',
      data: 
        {
          "email" : email,
          "password": password,
          "name": displayName,
          "about":about
      }
      
  }).then((response)=>{
      console.log(response.data)

  })

 

    
  };

  return (
    <div className="container pos">
		<div className="signup-box">
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div className="textbox">
					<i className="fa fa-user" aria-hidden="true"></i>
					<input type="text" placeholder="Username" name="displayName" value={displayName}  onChange={handleChange} required/>
				</div>

				<div className="textbox">
					<i className="fa fa-envelope" aria-hidden="true"></i>
					<input type="email" placeholder="Email Address" name="email" value={email} onChange={handleChange} required/>
				</div>

				<div className="textbox">
					<i className="fa fa-lock" aria-hidden="true"></i>
					<input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} required/>
				</div>
        <div className="textbox">
					<i className="fa fa-lock" aria-hidden="true"></i>
					<input type="password" placeholder="confirmPassword"name='confirmPassword' value={confirmPassword} onChange={handleChange}  required/>
				</div>
        <div className="textbox">
					<i className="fa fa-lock" aria-hidden="true"></i>
					<input type="text" placeholder="About" name="about" value={about} onChange={handleChange} required/>
				</div>

				<input type="submit" className="btn" value="Sign Up" />
			</form>
			<p className="login-link">Already have an account? <Link to="/">Login</Link></p>
		</div>
	</div>

  )
}
