

export default function ProjectCard(props) {
return (
    <div className="project-card">
        <h1>{props.name}</h1>
        <img src={props.image} alt="project thumbnail" className="project-image" />
        <a href={props.git}>
            <button>github</button>
        </a>
        <a href={props.live}>
 <button>Live site</button>
</a>
    </div>
)
}

                    
