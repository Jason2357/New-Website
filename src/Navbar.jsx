import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navBar">
                <Link to="/">My Website</Link>
                <ul className='navBarList'>
                    <li>
                        <a href="#introductionSection">Introduction</a>
                    </li>
                    <li>
                        <a href="#projectsSection">Projects</a>
                    </li>
                    <li>
                        <a href="#aboutSection">About</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}