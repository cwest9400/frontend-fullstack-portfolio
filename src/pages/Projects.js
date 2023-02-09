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
                <div className="project-section">
            {projects.map((project) => {
                 return (
                    
                        <ProjectCard name ={project.name} image= {project.image} id={project.id} git={project.git} live={project.live} key={project.id}/>
                    
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