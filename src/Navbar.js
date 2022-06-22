import './index.css'
import React from 'react';
import {useState} from 'react'
import {Link} from 'react-router-dom'



const Navbar = () => {

    return ( 
        <div className='navbar' >
            <ul >
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/create">Create</Link></li>
                
            </ul>
           
        </div>
     );
}
 
export default Navbar;