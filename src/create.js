import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState(' ');
    const [body, setBody] = useState(' ');
    const [author, setAuthor] = useState('Wilson Rotich');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            setIsPending(false);
             history.push('/');

        })

    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog title</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="title">Blog body</label>
                <textarea required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label htmlFor="author">Blog author</label>
                <select 
                    value={author}
                onChange={(e)=> setAuthor(e.target.value)}

                >
                    <option value="Wilson Rotich">Wilson Rotich</option>
                    <option value="John Mark">John Mark</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>
        </div>
     );
}
 
export default Create;