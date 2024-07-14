import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () =>{
    
    useEffect(()=>{
        localStorage.clear();
        
    },[])
    return(
        <div>

        </div>
    )
}
export default LogoutPage;