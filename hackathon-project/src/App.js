import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom';
// import Navigation from './components/Navbar/Navbar';
import Navbar1 from './components/Navbar/Navbar1';
import Home from './routes/Home/Home';
import Signin from './routes/Authentication/Signin/Signin';
import SignUpForm from './routes/sign-up/signup.component';
import Content from './components/Content/Content';
import History from './routes/History/History';
import Profilepage from './routes/Profilepage/Profilepage';
import Editprofile from './routes/editprofile/Editprofile';
const App = () => {
  return (
    <div>
       <Routes>
          <Route path='/' element={<Navbar1 />}>
            {/* <Route index path='/' element={<Home />} /> */}
            <Route index path='/home' element={<Home />} />
            <Route path='content' element={<Content />} />
            {/* <Route path='auth' element={<Authentication />} /> */}
            <Route path='signup' element={<SignUpForm/>} />
            <Route path='/' element={<Signin/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/profile' element={<Profilepage/>} />
            <Route path='/editpage' element={<Editprofile/>} />


      
          </Route>
        </Routes>
      
    </div>
  )
}

export default App
