import './App.css';
import {BrowserRouter, Route, Routes, Navigate,Outletd} from 'react-router-dom'
import React, { useEffect } from "react";
import CompaniesPage from './CompaniesPage';
import JobsPage from './JobsPage';
import RegisterPage from './RegisterPage';
import LoginForm from './LoginForm';
import ProfilePage from './ProfilePage';
import Navbar from './Navbar'
import LogoutPage from './LogoutPage';
import PrivateRoutes from './PrivateRoutes';
import CompanyDetail from './CompanyDetail';
import { AuthProvider } from './context/AuthContext';
import Error from './Error';
import LandingPage from './LandingPage';
import EditProfile from './EditProfile';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Error/>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path='/logout' element={<LogoutPage/>}/>
            <Route path='/profile' element={<ProfilePage />}/>  
            <Route path='/edit' element={<EditProfile/>}/>
          </Route>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/companies' element={<CompaniesPage/>}/>
          <Route path='/companies/:handle' element={<CompanyDetail/>}/>
          <Route path='/jobs' element={<JobsPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginForm />}/>

        </Routes>
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
