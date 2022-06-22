import {Link} from 'react-router-dom'
import React from 'react';
const BlogList = (props) => {
  const blogs = props.blogs;
  const deleteBlog = props.deleteBlog;
    return ( 

       <div>
            {blogs.map((blog)=>(
             <Link to = {`/blog/${blog.id}`}>
              <div className="blog-preview"> 
              <h2>{blog.title}</h2>
              <br />
              <p>Written by {blog.author}</p>
              </div>
             </Link>
            
             
         ))}
       </div>
     );
}
 
export default BlogList;