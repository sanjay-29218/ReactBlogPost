import { useState , useEffect } from "react";
const useFetch = (url)=>{
    const [blogs , setBlogs] = useState(null);
    const [isLoading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    const abort = new AbortController
    console.log(abort)
    function deleteBlog(id){
        let newBlog = blogs.filter((blog)=>blog.id != id)
        setBlogs(newBlog)
        
    }

useEffect(()=>{
    fetch(url , {signal : abort.signal})
    .then(res => {
        if(!res.ok){
            throw Error('Could not fetch the data for the resources')
        }
        return res.json();
    })
    .then(data => {
        // console.log(data)
        setBlogs(data)
        setLoading(false)
    })
    .catch(err => {
        if(err.name === 'AbortError'){
            console.log('fetch abort')
        }else{
            setLoading(false)
            console.log(err.message);
            setError(err.message)}
        }
    )

} , [url]);
return{blogs , isLoading , error , deleteBlog}
}

export default useFetch;