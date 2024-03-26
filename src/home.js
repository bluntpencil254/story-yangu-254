import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(
        [
            {title: 'My New website', body: 'dyudgetwfet dfgetedftdew tdfet', author: 'Mike Makori', id: 1},
            {title: 'Welcome Party!', body: 'dyudgetwfet dfgetedftdew tdfet', author: 'John Mark', id: 2},
            {title: 'Dancing Monkeys', body: 'dyudgetwfet dfgetedftdew tdfet', author: 'Michelle Opiyo', id: 3}
        ]
    )
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs"/>
           
           <BlogList blogs={blogs.filter((blog) =>blog.author === "Mike Makori")} title="Mikes Blogs"/>

        </div>
     );
}
 
export default Home;