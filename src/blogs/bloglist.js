/**
 * we can use props to pass in data from a parent template to a child template. This allows us to reuse data everywhere in our react app
 * and makes our work neater. In this example, this file is the child component while blogs.js is the parent component.
 * 
 */

const BlogList = (props) => {
    /* for us to access property from the parent component (prop) we need to pass in the 'props' keyword
    which is an object for ALL props passed, then access our own specific prop using
    dot notation */
    
    const blogs = props.blogs;
    return ( 
        <div className="blogs">
           {
           blogs.map((blog) =>(
            <div className="blog-preview" key={blog.id}>
                <h3>{blog.title}</h3>
                <p>Written by {blog.body} </p>
                </div>
           ))
           } 
            </div>
    )
}
 
export default BlogList;