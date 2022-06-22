import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
const {blogs , isLoading , error , deleteBlog} = useFetch('http://localhost:8000/blogs');  
    return ( 
        <div className="home-section">      
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog}/>}
            
    
            
    
        </div>
     );
}
export default Home; 