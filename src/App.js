import NotFound from './NotFound';
import React from 'react';
import Navbar from './Navbar';
import About from './About';
// import './App.css';
import Home from './Home';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Create from './Create';
import BlogContainer from './BlogContainer';
import AddBlog from './AddBlog';

function App() {
  return (
   <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/addblog'>
            <AddBlog></AddBlog>
          </Route>
          <Route path='/blog/:id'>
            <BlogContainer/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
        </div>  
    
    </div>
   </Router>
  
  
  );
}

export default App;
