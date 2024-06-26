import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="rmw-navbar flex">
            <div className="flex-1">logo</div>

            <div className="flex-1 justify-end">
                <ul className="flex gap-2 justify-end">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="news">News</Link></li>
                    <li><Link to="concerts">Concerts</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                    <li><Link to="about">About</Link></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;