import React, { useContext } from 'react';
import useFields from './hooks/useFields';
import "./App.css";
import AuthContext from './context/AuthContext';

const RegisterPage = () =>{
    const {registerUser} = useContext(AuthContext)
    const INITIAL_STATE = {
        username:'',
        password:'',
        firstName:'',
        lastName:'',
        email:''
    }

    const [formData, handleChange, resetData] = useFields(INITIAL_STATE)

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
        registerUser(formData)
    }

    return(
        <section>
       
        <form className='flex-column form-style'>
            <h1 className='no-margin'>Register</h1>
            <input onChange={handleChange} type='text' name='username' placeholder='Username' value={formData.username}/>
            <input onChange={handleChange} type='password' name='password' placeholder='Password' value={formData.password}/>
            <input onChange={handleChange} type='text' name='firstName' placeholder='First Name' value={formData.firstName}/>
            <input onChange={handleChange} type='text' name='lastName' placeholder='Last Name' value={formData.lastName}/>
            <input onChange={handleChange} type='email' name='email' placeholder='Email' value={formData.email}/>
            <button onClick={handleSubmit}>Register</button>
        </form>
        </section>
    )
}

export default RegisterPage;