import React, {useState, useEffect } from "react"

function Projects(props) {
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        fetch("./projects.json")
        .then((res) => res.json())
        .then((json) => {
            setProjects(json)
        })
        .catch(console.error)
    }, [])
    
    const loaded = ()=> {
        return (
            projects.map((project) => (
            <div >
                <h1>{project.name}</h1>
                <img src ={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live site</button>
                </a>
            </div>
        ))
    )
}
    return (
       projects ? loaded() : <h1>Loading...</h1>    )
}

export default Projects