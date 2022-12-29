/*
we want to create a simple blog using the useEffect feature in React to build 
it up.

The "key" attritubute is important when cycling tru an array of
objects in React outputting to the DOM.
*/
import { useState } from "react";
import BlogList from "./bloglist";


const BlogComponent = () => {
const [blogs, setBlog] = useState([
    {title: 'Learning React', body: 'When you’re backed against the wall, break the goddamn thing down.', id:1},
    {title: 'Buhari!!!!!', body: 'That’s the difference between you and me. You wanna lose small, I wanna win big.', id:2},
    {title: 'Emi Lokan', body: 'Sorry, I can’t hear you over the sound of how awesome I am.', id:3},
]

);
    return ( 
        /* import the child component we want and then pass the property (prop) we want shared 
        on to it as an object inside the name we define */

        <div className="blogs">
          <BlogList blogs={blogs}></BlogList>
            </div>
          
     );
}
 
export default BlogComponent;