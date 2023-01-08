import { Link } from "react-router-dom"
import "../style/output.css"

function Header (props) {
    return (
        <header>
        <nav className="nav-header">
            
                <div>
            <Link to="/">christopher west</Link>
            </div>
            <div className="header-links">
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
            </div>
            
        </nav>
        </header>
    )
}
export default Header