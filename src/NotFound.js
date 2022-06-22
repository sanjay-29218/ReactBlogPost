import React from "react";
import { useHistory } from "react-router-dom";
const Notfound = () => {
    const history = useHistory();
    const handleClick = ()=>{
        history.push('/')
    }

    return ( <div>
        <p><h2>USER NOT FOUND 404</h2></p>
        <button className="btn" onClick={handleClick}>Return to Home</button>
    </div> );
}
 
export default Notfound;