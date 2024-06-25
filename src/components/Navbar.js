const Navbar = () => {
    return (
        <nav className="rmw-navbar flex">
            <div className="flex-1">logo</div>

            <div className="flex-1 justify-end">
                <ul className="flex gap-2 justify-end">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;