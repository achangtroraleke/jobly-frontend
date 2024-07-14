import React, { useContext, useEffect } from "react";
import {Link} from 'react-router-dom';
import './App.css'
import JoblyApi from "./api";

import AuthContext from "./context/AuthContext";

const Navbar = () =>{
    let {user} = useContext(AuthContext);

    const logoutFunction= ()=>{
        localStorage.clear();
        JoblyApi.token = ''
        window.location.reload()
    }
   
    
    
    return(
        <nav>
           
            <ul id="nav-menu" className="flex ">
                <li id="logo"><Link to={'/'}>Jobly</Link></li>

                {user?
                <div className="flex link-group">
                    <li>
                        <Link to="/companies">Companies</Link>
                    </li>
                    <li>
                        <Link to="/jobs">Jobs</Link>
                    </li>



                    <li>
                        <Link to="/profile">Hello, {user.username}</Link>
                    </li>
                    <li onClick={logoutFunction}>
                        <Link to="">Logout</Link>
                    </li> 
             </div>:
             <div className="flex link-group">
                <li>
                    <Link to="/companies">Companies</Link>
                </li>
                <li>
                    <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                <Link to="/register">Register</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
             </div>}
             </ul>
        {/* //         :<ul id="nav-menu" className="flex">
        //             <li id="logo"><Link to={'/'}>Jobly</Link></li>
        //               <li>
        //             <Link to="/companies">Companies</Link>
        //         </li>
        //         <li>
        //             <Link to="/jobs">Jobs</Link>
        //         </li>
        //         <li>
        //         <Link to="/register">Register</Link>
        //     </li>
        //     <li>
        //         <Link to="/login">Login</Link>
        //     </li>
        //   </ul> */}
                
                
            
        </nav>
    )
}

export default Navbar;