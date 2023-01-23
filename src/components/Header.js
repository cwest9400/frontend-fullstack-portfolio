import { Link } from "react-router-dom"

import AnchorLink from "react-anchor-link-smooth-scroll";
import "../style/output.css"

function Header (props) {
    return (
        <header>
        <nav className="nav-header">
            
                <div>
            <Link to="/">christopher west</Link>
            </div>
            <div className="header-links">
            <AnchorLink href='#about'>about</AnchorLink>
            <AnchorLink href='#projects'>projects</AnchorLink>
            </div>
            
        </nav>
        </header>
    )
}
export default Header