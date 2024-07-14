import React, { useContext, useEffect, useState } from 'react';
import "./App.css"
import AuthContext from './context/AuthContext';
import { Link } from 'react-router-dom';
import JobsCard from './JobsCard';
const ProfilePage = () =>{
    const {user, getAllJobData} = useContext(AuthContext)
    const [userJobs, setUserJobs] = useState([])
useEffect(()=>{
    getJobs()
},[])

const getJobs = async () =>{
const res = await getAllJobData()

const filteredJobs = res.jobs.filter((job)=>user.applications.includes(job.id))
setUserJobs(filteredJobs)

}


return(
<section>
        <h1>Profile Page</h1>
        <h4>Welcome: {user.username}</h4>
        <button><Link to={'/edit'}>Edit Profile Info</Link></button>
        <h5>Outstanding Applications:</h5>
        <div className='feed'>
            {userJobs.map((job,index)=>{
                return(
                    <JobsCard key={index} job={job} disabled={true}/>
                )
            })}
        </div>

</section>
)

}

export default ProfilePage;