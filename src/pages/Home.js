import headshot from "../images/headshot.png"
import ProjectHeader from "../components/ProjectHeader"
import About from "./About"

function Home() {
    console.log("%c Hi! Let's be friends :)", 'background: #000; color: #bada55')
    return (
        <section className="home-section" id="home">
            <div className="intro-card">
                <h1>I'm a software engineer & designer who is dedicated to turning obstacles into opportunities,</h1>
                <p>focused on the human stuck in the middle.</p>
                <div className="bottom-intro-card">
                    <div className="img-headshot">
                        <img className="face" src={headshot} />
                        <div className="button-cta-container">
                        <a  className="button-cta" href="https://docs.google.com/document/d/1jbe_r5jrl1xw8UgKTTMA4mV014m3KPG2b2jZtoMY3wE/edit?usp=sharing" target="_blank">resume</a>
                        <a  className="button-cta" href="https://www.linkedin.com/in/christopher-west-64a74255/" target="_blank">linkedin</a>
                        <a  className="button-cta" href="https://github.com/cwest9400" target="_blank">gitHub</a>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div id="projects">
                <ProjectHeader />
                </div>
                <div id="about">
                <About />
                </div>
             
            </div>
        </section>
    )
}

export default Home