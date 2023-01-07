import { Link } from "react-router-dom"
import "../style/output.css"

function Header (props) {
    return (
        <header>
        <nav className="nav-header">
            
                <div>
            <Link to="/">christopher west</Link>
            </div>
            <div>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            </div>
            
        </nav>
        </header>
    )
}
export default Header