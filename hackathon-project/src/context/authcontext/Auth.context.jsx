import { createContext } from "react";
import { useState } from "react";
const defaultauth={
    id:null,
    name:'',
    email:'',
    about:''
  
  
  
  
  }
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
})
export const UserProvider=({children})=>{
    const[currentUser,setCurrentUser]=useState(defaultauth);
    const value={currentUser,setCurrentUser};
    // signOutUser();
   
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
