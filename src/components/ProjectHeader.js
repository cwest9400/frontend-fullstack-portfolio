import Projects from "../pages/Projects"
function ProjectHeader (props) {
    return (
        <div>
        <nav className="nav-project-header">
            
                <div>
            <h1>projects.</h1>
            </div>
            <div className="project-links">
            <p>code</p>
            <p>design</p>
            <p>art</p>
            </div>
            
        </nav>
        <Projects />
        </div>
    )
}
export default ProjectHeader