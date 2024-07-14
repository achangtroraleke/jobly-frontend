import React, {useContext} from "react";
import './App.css'
import { Link } from "react-router-dom";
import AuthContext from "./context/AuthContext";


const LandingPage = () =>{
    const {user} = useContext(AuthContext)
    return(
        <section>
            <h1>Welcome To Jobly!</h1>
            <h2>Where Job Searching Is Easy!</h2>
            {!user?<div className="button-group flex">
                <button><Link to={'/register'}>Register</Link></button>
                <button><Link to={'/login'}>Login</Link></button>
            </div>:null}
        </section>
    )
}

export default LandingPage;