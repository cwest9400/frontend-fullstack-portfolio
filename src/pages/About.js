import DEV_ICONS from "../images/dev_icons/devIcons"

function About(props) {
  console.log(DEV_ICONS)
  return (
    <div className="about-section">
      <h1>about.</h1>
      <div className="about-card">
        <div className="about-info">
          <h3 className="bio-top">
        As a full-stack software engineer with over 15 years of experience in manufacturing and operations, I bring a unique blend of technical expertise and practical design to every project.
        </h3>
        <h3 className="life-outside">life outside the office</h3>
        <p className="bio">I'm usually hanging out with my family. My wife and I love adventure and showing the world to our new daughter.</p>
        
<p className="bio">
I'm also a part-time wizard and enjoy wizardly activities such as playing Magic: The Gathering, painting fantasy illustrations and woodworking. One day, I will finally finish the illustrated card game that I started a few years ago.</p>

        
        </div>
        <div className="tech-stack">
          <h3 className="technology-title">Technology that I've worked with</h3>
          <div className="icon-container" >
          {DEV_ICONS.map((icons) => {
            return (
                <div className="icon-card" key={icons.name}>
                  <img className="icons" src={icons.img} />
                  {icons.name}
                </div>
            )
          })}
          </div>

        </div>


      </div>

    </div>
  )
}

export default About