import React, {useContext, useEffect, useState} from "react";
import JoblyApi from "./api";
import "./App.css"
import CompanySearchForm from "./CompanySearchForm";

import CompanyCard from "./CompanyCard";
import AuthContext from "./context/AuthContext";

const CompaniesPage = () =>{
    const [companies, setCompanies] =  useState([])
    const {isLoading, setLoading, getCompanyData} = useContext(AuthContext)

    // const getCompanyData = async (params) =>{
    //     let res = await JoblyApi.getAllCompanies(params)
        
    //     setCompanies(res.companies)
       
        
    //     return res
    // }
    useEffect(()=>{
       searchFunction()
      },[])

    const searchFunction = async (params)=>{
        const res = await getCompanyData(params)
        if(!res) return
        setCompanies(res.companies)
    
    }

 
    return (
        <section>
            <h1>All Companies</h1>
            <CompanySearchForm searchFunction={searchFunction}/>
            <div>
            <h3>Companies:</h3>
            <div className="feed">
            {companies.map((company)=>{
                return(
                    <CompanyCard key={company.handle} company={company} handle={company.handle}/>
                    
                )
            })}
            </div>
             </div>
        </section>
    )
}

export default CompaniesPage;