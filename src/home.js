import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(
        [
            {title: 'My New website.', body: 'dyudgetwfet dfgetedftdew tdfet', author: 'Wilson Rotich', id: 1},
            {title: 'Welcome Party!', body: 'dyudgetwfet dfgetedftdew tdfet', author: 'John Mark', id: 2},
            {title: 'Dancing Monkeys.', body: 'dyudgetwfet dfgetedftdew tdfet', author: 'Michelle Opiyo', id: 3},
            {title: 'My birthday Treat.', body: 'dyudgetwfet dfgetedftdew tdfet', author: 'Wilson Rotich', id: 4},
            {title: 'A holiday to remember.', body: 'dyudgetwfet dfgetedftdew tdfet', author: 'Wilson Rotich', id: 5}
        ]);

        const [name, setName] = useState('Wilson Rotich');

        const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs);
        }

        useEffect(() => {
            console.log('use effect run');
            console.log(name);
        }, [name]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
           
           <BlogList blogs={blogs.filter((blog) =>blog.author === "Wilson Rotich")} title="Blogs by Wilson"/>
          <button onClick={() => setName('Wilson Ngeno')}>Change Name</button>
          <p>{ name }</p>
        </div>
     );
}
 
export default Home;

