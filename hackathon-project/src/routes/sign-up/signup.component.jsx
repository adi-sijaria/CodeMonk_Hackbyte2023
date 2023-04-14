
import React from 'react'
import Forminput from '../../components/Form-input/form-input';


import { useState } from 'react';
import Button from '../../components/button-component/button.component';
import "./signup.scss"
import { useContext } from 'react';
import axios from 'axios';

import './signup.scss'
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
    <div className='sign-up-container'>
      <h2>Dont have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
      
      
        <Forminput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name='displayName'
          value={displayName} />

       
       
        <Forminput 
        label="email"
        type="email" 
        required 
        onChange={handleChange} 
        name='email' value={email} />

       
       
        <Forminput 
        label="password"
        type="password" 
        required 
        onChange={handleChange} 
        name='password' 
        value={password} />

       
       
        <Forminput 
        label="confirm-password"
        type='password' 
        required onChange={handleChange} 
        name='confirmPassword' 
        value={confirmPassword} />

     <Forminput 
        label="About yourself"
        type='text' 
        required onChange={handleChange} 
        name='about' 
        value={about} />

<input type="file" id="fileUpload" accept=".png" />


        <Button buttonType="submit">Sign Up</Button>

      </form>
    </div>

  )
}
