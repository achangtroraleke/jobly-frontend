import React, {useContext} from "react";
import useFields from "./hooks/useFields";
import "./App.css";
import AuthContext from "./context/AuthContext";

const CompanySearchForm = (props) =>{
    const {isLoading, setLoading, getCompanyData} = useContext(AuthContext)

    const INITIAL_STATE = {
        name:'',
        minEmployees: '',
        maxEmployees:''

    }
    const [formData, handleChange, resetData] = useFields(INITIAL_STATE);

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        props.searchFunction(formData)
        resetData();
    }
  


    return (
        <form id="search-bar" className="flex">
            <input onChange={handleChange} type="text" name="name" placeholder="Company Name..." value={formData.name}/>
            <input onChange={handleChange} type="number" name="minEmployees" value={formData.minEmployees} placeholder="Minimum Employees"/>  
            <input onChange={handleChange} type="number" name="maxEmployees" value={formData.maxEmployees} placeholder="Maximum Employees"/>    
            <button onClick={handleSubmit}>Search</button>       
        </form>
    )
}

export default CompanySearchForm;