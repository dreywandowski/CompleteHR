/**
 * we can use props to pass in data from a parent template to a child template. This allows us to reuse data everywhere in our react app
 * and makes our work neater. In this example, this file is the child component while blogs.js is the parent component.
 * 
 */
import {Link} from "react-router-dom";
const BlogList = (props) => {
    /* for us to access property from the parent component (props) we need to pass in the 'props' keyword
    which is an object for ALL props passed, then access our own specific prop using
    dot notation */
     
    const blogs = props.blogs;
    const title = props.title;
    //const deleteBlog = props.delete;
    //<button onClick={() => 
       // deleteBlog(blog.id)}>Delete Blog</button>

    // we can destruct the props object and use them directly
    // const BlogList = ({blogs, title}) => {

    
    return ( 
        <div className="blogs">
              <em>{title}</em>
           {
           blogs.map((blog) =>(
            <div className="blog-preview" key={blog.id}>
                <Link to={`blogs/${blog.id}`}>
               <h3>{blog.id}</h3> </Link>
                <h3>{blog.title}</h3>
                <p>{blog.body} </p>
            <br></br>
                </div>
           ))
           } 
            </div>
    )
}
 
export default BlogList;