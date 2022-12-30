/*
we want to create a simple blog using the useEffect feature in React to build 
it up.

The "key" attritubute is important when cycling tru an array of
objects in React outputting to the DOM.
*/
import { useState, useEffect } from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";

const BlogComponent = () => {
const {data: blogs, isPending, error} = useFetch(" http://localhost:8000/blogs");
  // we can use all the logic below as a resuable function by creating a custom
  // hook (useFetch)
  // useState effect for typical JSON file
//const [blogs, setBlog] = useState(null
/*const [blogs, setBlog] = useState([
  {title: 'Learning React', body: 'When you’re backed against the wall, break the goddamn thing down.', id:1, author:'Harvey'},
  {title: 'Buhari!!!!!', body: 'That’s the difference between you and me. You wanna lose small, I wanna win big.', id:2, author:'Harvey'},
  {title: 'Emi Lokan', body: 'Sorry, I can’t hear you over the sound of how awesome I am.', id:3, author:'James'},
]
*/

//);

// set a conditional loading message for the frontend
/*const [isPending, setLoading] = useState(true);

// set a conditional error message for the frontend
const [error, setError] = useState(null);
*/
const [lol, setHaha] = useState("derc");

/*
const handleDelete = (id) => {
  const currentBlog = blogs.filter(blog => blog.id !== id);
  setBlog(currentBlog);
}*/

const deleting = (lol) => {
  setHaha(lol);
}

/** we can also use the useEffect hook to monitor for DOM rendering changes,
 * however, this fires for every render and so we need to keep track of what state we want to monitor
 * by adding an array of states as an arguement in the useEffect function [dependency]
 */
/*
useEffect(() =>{
  setTimeout(()=> {
    fetch("http://localhost:8000/blogs").
    then(res =>{
      //console.log(res)
      if(!res.ok){
        setLoading(false);
        throw Error("failed to fetch data for this resource!!!");
      }
      
      return res.json();
    }).
    then(data =>{
      setBlog(data)
      setLoading(false)
      setError(null)
  console.log(data)
    }).
    catch(err =>{
      console.log(err.message);
      setError(err.message);
    });
  }, 1000);
  
}, []);

   blogs && <BlogList blogs={blogs} title="My Book Authors"  delete={handleDelete}/>}
*/
    return ( 
        /* import the child component we want and then pass the property (prop) we want shared 
        on to it as an object inside the name we define 
        we can also resuse some parts of the component
        ==>     <BlogList blogs={blogs.filter((blog) => blog.author === 'Harvey')} title="Books Written By Harvey"></BlogList>
        
        We can also pass in functions as props*/

        <div className="blogs">
            {isPending &&  <div> Loading... please wait while we load ur resources </div>}
            <br></br>
            {error &&  <div> {error}</div>}
            <br></br>
   { // we can conditionally render data with templates using the 
   // javascript logical operator, the data on the left side of && is evaluated.
   // if null, the right hand isde is not evaluated and vice-versa. 
   blogs && <BlogList blogs={blogs} title="My Book Authors" />}
      
   
  <button onClick={() => 
                deleting("oluwa oo")}>Delete btn</button>
            </div>
          
     );
}
 
export default BlogComponent;