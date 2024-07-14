import React, { useContext } from "react";
import JobsCard from "./JobsCard";
import { useParams } from "react-router-dom";
import './App.css'


const CompanyJobData = (props) =>{
    
    const {handle} = useParams()

    return(
        <div className="feed">
            {props.jobs.map((job)=>{
                return(
                <JobsCard key={job.id} job={job} handle={handle}/>
                )
            })}
        </div>
    )
}
export default CompanyJobData