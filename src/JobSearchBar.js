import React from "react";
import useFields from "./hooks/useFields";
import "./App.css"

const JobSearchBar = (props) =>{
    const INITIAL_STATE = {
        title:'',
        minSalary:'',
        hasEquity:''
    }
    const [formData, handleChange, resetData] = useFields(INITIAL_STATE)

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.searchFunction(formData);
        resetData();
    }


    return(
        <form id="search-bar" className="flex">
            <input onChange={handleChange} type="text" name="title" placeholder="Title" value={formData.title}/>
            <input onChange={handleChange} type="number" name="minSalary" placeholder="Minimum Salary" value={formData.minSalary}/>
            
            <div className="flex form-group">
                <label htmlFor='hasEquity'>True</label>
                <input onChange={handleChange} type="radio" name="hasEquity" placeholder="Has Equity..." value={true} />
            </div>
            <div className="flex form-group" >
            <label htmlFor='hasEquity'>False</label>
            <input onChange={handleChange} type="radio" name="hasEquity" placeholder="Has Equity..." value={false} />
            </div>
            <button onClick={handleSubmit}>Search</button>
        </form>
    )
}

export default JobSearchBar;