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
    {title: 'Learning React', body: 'bulu bala', id:1},
    {title: 'Buhari!!!!!', body: 'bala bulu', id:2},
    {title: 'Emi Lokan', body: 'gbe mi debe', id:3},
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