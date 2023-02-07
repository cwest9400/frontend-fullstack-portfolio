

export default function ProjectCard(props) {
    const name = props.name
    const imgUrl = props.image

    return (
        <div className="project-card">
            <div className="card-title"><h1>{name}</h1></div>
            <div className="card-image-container">
                <img className="project-image"
                    src={imgUrl}
                    alt="project thumbnail" />
                
            </div>
            
                {/* <a href={props.git}>
            <button>github</button>
        </a>
        <a href={props.live}>
 <button>Live site</button>
</a> */}
            
        </div>
    )
}


