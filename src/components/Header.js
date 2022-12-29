import { Link } from "react-router-dom"
import "../style/nav.css"

function Header (props) {
    return (
        <header>
        <h1>My Portfolio Page</h1>
        <nav>
            <div  className="nav-style">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            </div>
        </nav>
        </header>
    )
}
export default Header