import { createContext, useState, useEffect } from "react";
import JoblyApi from "../api";
import useLocalStorageState from "../hooks/useLocalStorage";
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate()

    
    const [authToken, setAuthToken] = useLocalStorageState('authToken')
    const [user, setNewUser] = useLocalStorageState('user')
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    let loginUser = async (formData) =>{
    
        let user_token = await JoblyApi.loginUser(formData)  
        console.log(user_token)
        if(user_token.token){
        JoblyApi.token = await user_token.token
        let userData = await JoblyApi.getUser(formData.username)
        
        setAuthToken(user_token.token)
        setNewUser(userData.user)
        console.log(authToken)
        console.log(user)
        navigate('/')
    }
        else{
            console.log(user_token[0])
            setError(user_token)
        }
    }

    const registerUser = async (formData) =>{
        let res = await JoblyApi.registerUser(formData)
        if(res.error){
            console.log(res)
            setError(res.error)
        }
        else return res
    }
        
    const getJobData = async (handle) =>{
    
        let res = await JoblyApi.getCompany(handle)
        setLoading(false)
        console.log("Current LOAD STATUS: ", isLoading)
        return(res)
        
    }     

    const getAllJobData = async (params) =>{
        let res = await JoblyApi.getAllJobs(params)
        if(res.error){
            setError(res.error)
        }else return res
    }
    const getCompanyData = async (params) =>{
        let res = await JoblyApi.getAllCompanies(params)
        if(res.error){
            setError(res.error)
        }

        else{return res}
        
    }
    

    const applyToJob = async (jobId) =>{
        
        let res = await JoblyApi.applyToJob(user.username, jobId, 'post')
        console.log(res)
        if(res.error){
            setError(res.error)
        }else return res
    }
    
    let contextData = {
        authToken:authToken,
        user:user,
        isLoading:isLoading,
        error:error,
        loginUser:loginUser,
        registerUser:registerUser,
        setLoading:setLoading,
        getJobData:getJobData,
        getAllJobData:getAllJobData,
        getCompanyData:getCompanyData,
        applyToJob:applyToJob,
        setError:setError
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
