import React, {useContext, useEffect, useState} from "react";
import './App.css'
import JobsCard from "./JobsCard";
import JobSearchBar from "./JobSearchBar";
import AuthContext from "./context/AuthContext";

const JobsPage = () =>{
    const [jobData, setJobData] = useState([]);
    const {user, getAllJobData} = useContext(AuthContext)
    const getJobData = async (params) =>{
        let res = await getAllJobData(params)

        if(user){
            setJobData(res.jobs.filter(job=>!user.applications.includes(job.id)))
        }else{
            setJobData(res.jobs)
        }
       
   
        return res
    }

    useEffect(()=>{
        getJobData()
      },[])

    return(
        <section>
            <h1>All Jobs</h1>
            <JobSearchBar searchFunction = {getJobData}/>
            <h3>Available Jobs:</h3>
            <div className="feed">
            {jobData.map((job)=>{
                return(
                    <JobsCard key={job.id} job={job}/>
                )
            })}</div>
        </section>
    )
}

export default JobsPage