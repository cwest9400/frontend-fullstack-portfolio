import React, { useState, useEffect } from "react"

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

    const loaded = () => {
        return (
            projects.map((project) => (
                <div className="project-container" key={project.name}>
                    
                        <div className="project-card">
                            <h1>{project.name}</h1>

                            <img src={project.image} className="project-image" />

                            <a href={project.git}>
                                <button>Github</button>
                            </a>
                            <a href={project.live}>
                                <button>Live site</button>
                            </a>
                        </div>
                    
                </div>
            ))
        )
    }
    return (
        projects ? loaded() : <h1>Loading...</h1>)
}

export default Projects