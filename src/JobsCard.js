import React, { useContext, useEffect, useState } from "react";
import './JobCard.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";

const JobsCard = (props) =>{
    const [salary, setSalary] = useState()
    const {applyToJob, user} = useContext(AuthContext)
    const navigate = useNavigate();

    /**Turns a integer into a string and adds commas where they are necessary. */
    function addCommas(num) {

        const numStr = String(Math.abs(num))
        const numArr = numStr.split('').map(n => n)
        
      
        const resultsArr = [];
    
        let results
        
        if(numArr.length < 4){
            if(num<0) resultsArr.unshift('-')
            results = numArr.join('')
           
        }else{  
            const reversedNumArr = numArr.reverse().map(n=>n)
            let counter = 0
            /**When the counter is equal to 3 the number is greater than 3 place values. We check if the next index has a value to see if we need to add another commma */
            for(let i=0; i< reversedNumArr.length; i++){
                resultsArr.unshift(reversedNumArr[i])
                counter +=1;
                if(counter === 3 && reversedNumArr[i+1]){
                    resultsArr.unshift(',')
                    counter = 0
                }
            }
            if(num<0) resultsArr.unshift('-')
            results = resultsArr.join('')
        }   
    
      
        return results
    }

    useEffect(()=>{
        setSalary(addCommas(props.job.salary))
    },[])

    const handleApply = async () =>{
        if(user){
            let res = await applyToJob(props.job.id)
            console.log(res)
        }else{
            navigate('/login')
        }
        
    }

    return(
        <div className="job-card card">
            <h5>{props.job.title}</h5>
            <h5>Company: {props.handle?props.handle:<Link to={`/companies/${props.job.companyHandle}`}>{props.job.companyName}</Link>}</h5>
            <p>Salary: ${salary}</p>
            <p>Equity: {props.job.equity}</p>
            {!props.disabled?<button onClick={handleApply}>Apply</button>:null}
        </div>
    )
}

export default JobsCard