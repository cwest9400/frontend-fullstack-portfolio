
import PROJECT_IMG from "../images/projectImg"

export default function ProjectCard(props) {
    

    return (
        <div className="project-card">
            <div className="project-description">
                <div className="project-card-title">{props.name} - <span className="project-type-paragraph">{props.type}</span></div>
                <div className="project-desc-paragraph">{props.desc} </div>
                <div className="project-technology-title">technology</div>
                <div className="project-technology-container">
                    {props.tech}
                    </div>
                <div className="project-button-container">
                    <a className="button-project-links" href={props.git} target="_blank">
                        gitHub
                    </a>
                    <a className="button-project-links" href={props.live} target="_blank">
                        live site
                    </a>
                </div>
            </div>

            <div className="card-image-container">
                <img className="project-image" src={PROJECT_IMG[props.id]} alt="project thumbnail" />
            </div>
        </div>




    )
}


