/*
we want to create a simple blog using the useEffect feature in React to build 
it up.

The "key" attritubute is important when cycling tru an array of
objects in React outputting to the DOM.
*/
import { useState, useEffect } from "react";
import BlogList from "./bloglist";


const BlogComponent = () => {
const [blogs, setBlog] = useState([
    {title: 'Learning React', body: 'When you’re backed against the wall, break the goddamn thing down.', id:1, author:'Harvey'},
    {title: 'Buhari!!!!!', body: 'That’s the difference between you and me. You wanna lose small, I wanna win big.', id:2, author:'Harvey'},
    {title: 'Emi Lokan', body: 'Sorry, I can’t hear you over the sound of how awesome I am.', id:3, author:'James'},
]

);

const [lol, setHaha] = useState("derc");

const handleDelete = (id) => {
  const currentBlog = blogs.filter(blog => blog.id !== id);
  setBlog(currentBlog);
}

const deleting = (lol) => {
  setHaha(lol);
}

/** we can also use the useEffect hook to monitor for DOM rendering changes,
 * however, this fires for every render and so we need to keep track of what state we want to monitor
 * by adding an array of states as an arguement in the useEffect function [dependency]
 */
useEffect(() =>{
  alert("Use effect triggered!" + blogs);
}, [lol]);

    return ( 
        /* import the child component we want and then pass the property (prop) we want shared 
        on to it as an object inside the name we define 
        we can also resuse some parts of the component
        ==>     <BlogList blogs={blogs.filter((blog) => blog.author === 'Harvey')} title="Books Written By Harvey"></BlogList>
        
        We can also pass in functions as props*/

        <div className="blogs">
          <BlogList blogs={blogs} title="My Book Authors"  delete={handleDelete}/>
        
  <button onClick={() => 
                deleting("oluwa oo")}>Delete btn</button>
            </div>
          
     );
}
 
export default BlogComponent;