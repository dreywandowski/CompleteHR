import { useState } from "react";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthour] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {title, body, author};
    console.log(blog);

    fetch('http://localhost:8000/blogs', {
        method:'POST',
        headers: { "Content-type" : "application/json"},
        body: JSON.stringify(blog)}).then(()=>{
            console.log('new blog added');
        })
    }

    return ( 
      
        <div className="create">
            <h2> Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog title:</label>
                <input type="text" required  value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <br></br><br></br>
                <label> Blog body:</label>
                <textarea required value={body}
                onChange={(e) => setBody(e.target.value)}/><br></br><br></br>
                <label> Blog author:</label>
                <br></br>
                <select value={author}
                onChange={(e) => setAuthour(e.target.value)}>
                    <option value="adura"> adura</option>
                    <option value="daniel"> daniel</option>
                    <option value="xtey"> xtey</option>
                </select>
                <br></br> <br></br>
                <button type="submit">Add Blog</button>
                <p> {title}</p>
                <p> {body}</p>
                <p> {author}</p>
            </form>
        </div>
     );
}
 
export default CreateBlog;