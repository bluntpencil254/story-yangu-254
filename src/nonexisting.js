import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Nonexisting = () => {
    return (  
        <div className="non-existing">
            <p>Sorry, that page does not exist.</p>
            <Link to="/">Back to Homepage...</Link>
        </div>
    );
}
 
export default Nonexisting;