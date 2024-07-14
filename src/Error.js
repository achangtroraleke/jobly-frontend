import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";

const Error = () =>{
    const {error, setError} = useContext(AuthContext)

    console.log(error)
    const handleClose = () =>{
        setError(null)
    }
    
    if(error){alert(error)}
    //     return(
    //     <section>
    //         {error.map(err=>{
    //             return(
    //                 <h4>{err}</h4>
    //             )}
    //             )
    //         }
            
    //         <button onClick={handleClose}>close</button>
    //     </section>
    // )
}
export default Error;