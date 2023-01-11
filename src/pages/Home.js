import headshot from "../images/headshot.png"

function Home(props) {
    return (
        <section className="home-section">
            <div className="intro-card">
                <h1>I'm a software engineer & designer who is passionate <br/>about turning obstacles into opportunity,</h1>
                <p>focusing on the human stuck in the middle.</p>
                <div className="bottom-intro-card">
                <div className="img-headshot">
                <button>contact</button>
                <img src={headshot}/>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Home