import React from "react";
import "./App.css"
import "./CompanyCard.css"
import { Link } from "react-router-dom";
import CompanyDetail from "./CompanyDetail";
const CompanyCard = (props) =>{
    
    return(
        <Link to={`/companies/${props.company.handle}`} handle={props.company.handle} id="company-card" className="flex-column card">
            <h5>{props.company.name}</h5>
            <p>Number of Employees: {props.company.numEmployees}</p>
            <p>{props.company.description}</p>
        </Link>
    )
}

export default CompanyCard