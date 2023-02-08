import PROJECT_IMG from "../images/projectImg"

export default function ProjectCard(props) {
    const name = props.name
    const imgUrl = props.image

    return (
        <div className="project-card">
            <div className="project-description">
                <h1 className="card-title">{name}</h1>
                <div>description</div>
                <div>technology</div>
                <div>
                    <a className="button-project-links" href={props.git}>
                        gitHub
                    </a>
                    <a className="button-project-links" href={props.live}>
                        live site
                    </a>
                </div>
            </div>

            <div className="card-image-container">
                <img className="face" src={PROJECT_IMG[props.id]} alt="project thumbnail" />
            </div>
        </div>




    )
}


