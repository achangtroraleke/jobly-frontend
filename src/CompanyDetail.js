import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import AuthContext from "./context/AuthContext";
import CompanyJobData from "./CompanyJobData";
const CompanyDetail = () =>{
    const {handle} = useParams()
    const [company, setCompany] = useState({})

    const {isLoading, setLoading, getJobData} = useContext(AuthContext)

    useEffect(()=>{
        setLoading(true)
        getJobData(handle).then((res)=>setCompany(res))
        console.log("ALL JOB", company.jobs)
    },[])

    // const getJobData = async () =>{
    //     let res = await JoblyApi.getCompany(handle)
       
    //     setCompany(res)
    //     setLoading(false)
    // }
    if(isLoading){
        return(
            <div>Loading</div>
        )
    }
    else return(
        <section>
            <h3>Company: {company.name}</h3>
            <h5>Description: {company.description}</h5>
            <h5>Number of Employees: {company.numEmployees}</h5>
            <h5>Available Positions:</h5>
            {company.jobs?<CompanyJobData jobs={company.jobs}/>:<h3>Loading</h3>}
        </section>
    )
}

export default CompanyDetail;