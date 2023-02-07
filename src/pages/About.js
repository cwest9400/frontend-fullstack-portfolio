import DEV_ICONS from "../images/dev_icons/devIcons"

function About(props) {
  console.log(DEV_ICONS)
  return (
    <div className="about-section">
      <h1>about.</h1>
      <div className="about-card">
        <div className="about-info">
          I was one of those kids with an endless imagination (I still am), always drawing, tinkering, creating, and building. Later in life and throughout my work experience, I've learned to harness my natural interests in design to facilitate positive influence on day-to-day life; Including the organizations that I've been a part of.
        </div>
        <div className="tech-stack">
          Technology that I've worked with
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