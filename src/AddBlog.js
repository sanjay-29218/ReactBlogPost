import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import './index.css'
const AddBlog = () => {
  
  const [title , setTitle] = useState('')
  const [body , setBody] = useState('')
  const [author , setAuthor] = useState('sanjay')
  const [isPending , setPending] = useState(false)
  const history = useHistory();

    const handleSubmit =(e)=>{
      e.preventDefault();
      const blog = {title,body,author};  
      fetch('http://localhost:8000/blogs' , {
        method: "POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(blog)
      }).then(()=>{
        console.log('New Blog Added')
        setPending(false)
        history.push('/')
      })
      
      
     
    }
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
            <h2><label >Title:</label></h2>
            <input
             type="text"
             required
             value={title}
             onChange={(e)=> setTitle(e.target.value)}

             />
            <h2><label >Body:</label></h2>
            <textarea 
            required
            value={body}
            onChange={(e)=> setBody(e.target.value)}
            ></textarea>
            <h2><label>Author:</label></h2>
            <select 
            value={author}
            onChange={(e)=>setAuthor(e.target.value)
            }
            >
            <option value="sanjay">Sanjay</option>
            <option value="ajay">Ajay</option>
            <option value="Bidur">Bidur</option>
            </select>
            {!isPending && <button style={{width:'25%',margin:'20px auto',fontSize:'20px'}} >Add Blog</button>}
            {isPending && <button style={{width:'25%',margin:'20px auto',fontSize:'20px'}} >Adding Blog</button>}
            
        </form>
      </div>
    );
  };
  
  export default AddBlog;
  