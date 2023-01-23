import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

function Projects(props) {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("https://oldnebu.herokuapp.com/projects")
            .then((res) => res.json())
            .then((json) => {
                setProjects(json)
            })
            .catch(console.error)
    }, [])
console.log(projects)
    const loaded = () => {
        return (
            <div>
                <div className="project-container">
            {projects.map((project) => {
                 return (
                    <Link to={`/project/${project.name}`} key={project.id}>
                        <ProjectCard name ={project.name} image= {project.image}/>
                    </Link>
                 )
            }
        )
    }
    </div>
    </div>
    )    
    
                 
                    


    }
    return (
        projects ? loaded() : <h1>Loading...</h1>)
}

export default Projects