import { useHistory, useParams } from "react-router-dom";
import React from "react";
import useFetch from "./useFetch";
const BlogContainer = () => {
  const { id } = useParams();
  const history = useHistory();
  const { blogs, isLoading, error } = useFetch("http://localhost:8000/blogs/" + id);
  const handleClick = ()=>{
    fetch("http://localhost:8000/blogs/" + id , {
      method:'DELETE'
    }).then(()=>{
      history.push('/')
    })
  }
  return (
    <div className="BlogContainer">
        {isLoading && <div>Loading...</div>}
        {error&& <div>{error}</div>}
        {blogs && (
            <article>
                <h2>{blogs.title}</h2>
                <br />
                <p>{blogs.body}</p>
                <br />
                <span>Written by {blogs.author}</span> 
                <center><button className="btn" onClick={handleClick}>Delete</button></center>
            </article>
        )}
    </div>
  );
};

export default BlogContainer;
