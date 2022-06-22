import React from "react";
import { Link } from "react-router-dom";
const Create = () => {
    return (  <div className="create">
        <Link to= '/addblog'><h2><center><button className="btn">Add a new Blog</button></center></h2></Link>
    </div> );
}
 
export default Create;