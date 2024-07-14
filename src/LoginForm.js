import React, {useContext} from "react";
import JoblyApi from './api';
import useFields from './hooks/useFields';
import AuthContext from "./context/AuthContext";

import "./App.css"

const LoginForm = (props) =>{

    let {loginUser} = useContext(AuthContext);

    const INITIAL_STATE = {
        username:'',
        password:''
    }
    

    

    const handleSubmit = async (e) =>{
        e.preventDefault();
        localStorage.clear();
        loginUser(formData)



        // let user_token = await JoblyApi.loginUser(formData)  
        
        // JoblyApi.token = await user_token.token
        // let userData = await JoblyApi.getUser(formData.username)
    
        // localStorage.setItem('auth_token', user_token)
        // localStorage.setItem('user_data', userData.user)
  
    }

    const [formData, handleChange, resetData] = useFields(INITIAL_STATE)
    return(
        <section>

        
        <form id="" className="flex-column form-style">
            <h1 className="no-margin">Login</h1>
            <input onChange={handleChange} type='text' name='username' placeholder='Username' value={formData.username}/>
            <input onChange={handleChange} type='password' name='password' placeholder='Password' value={formData.password}/>
            <button onClick={handleSubmit}>Login</button>
        </form>
        </section>
    )
}

export default LoginForm;