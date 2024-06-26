import { useState, useEffect } from "react"
import ProjectCard from '../components/ProjectCard'
import projectsData from '../projects.json'

function Projects(props) {
    const [projects, setProjects] = useState(projectsData)

    // useEffect(() => {
    //     fetch("https://oldnebu.herokuapp.com/projects")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setProjects(json)
    //         })
    //         .catch(console.error)
    // }, [])

    const loaded = () => {
        return (
            <div>
                <div className="project-section">
            {projects.map((project) => {
                 return (
                    
                        <ProjectCard type={project.type} desc={project.desc} tech={project.tech} name ={project.name} image= {project.image} id={project.id} git={project.git} live={project.live} key={project.id}/>
                    
                 )
            }
        )
    }
    </div>
    </div>
    )    
    
                 
                    


    }
    return (
        projects.length > 0 ? loaded() : <h1>Loading...</h1>)
}

export default Projects