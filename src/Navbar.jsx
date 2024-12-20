import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navBar">
                <Link to="/">My Website</Link>
                <ul className='navBarList'>
                    <li>
                        <Link to="/GameCenter">Game Center</Link>
                    </li>
                    <li>
                        <a href="./games.html">games</a>
                    </li>
                    <li>
                        <a href="#aboutSection">About</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}