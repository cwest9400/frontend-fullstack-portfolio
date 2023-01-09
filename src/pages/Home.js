import headshot from "../images/headshot.png"

function Home(props) {
    return (
        <section className="home-section">
            <div className="intro-card">
                <p className="p1">I'm a software engineer & designer who is passionate <br/>about turning obstacles into opportunity,</p>
                <p className="p2">focusing on the human stuck in the middle.</p>
                <div className="img-headshot">
                <img src={headshot}/>
                </div>
            </div>
        </section>
    )
}

export default Home