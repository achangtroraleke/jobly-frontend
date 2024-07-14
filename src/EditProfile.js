import React, {useContext} from "react";
import AuthContext from "./context/AuthContext";
import JoblyApi from './api';
import useFields from './hooks/useFields';
import "./App.css"

const EditProfile = () =>{
    const {user} = useContext(AuthContext)



    const INITIAL_STATE = {
       
      
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email
    }
    const [formData, handleChange, resetData] = useFields(INITIAL_STATE)

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
        JoblyApi.updateUser(user.username, formData)
    }

    return(
        <section>
            <h1>Edit Profile Info</h1>
            <form className='flex-column form-style'>
            <label>First Name</label>
            <input onChange={handleChange} type='text' name='firstName' placeholder='First Name' value={formData.firstName}/>
            <label>Last Name</label>
            <input onChange={handleChange} type='text' name='lastName' placeholder='Last Name' value={formData.lastName}/>
            <label>Email</label>
            <input onChange={handleChange} type='email' name='email' placeholder='Email' value={formData.email}/>
            <button onClick={handleSubmit}>Update Info</button>
            </form>
        </section>
    )
}
export default EditProfile;