import headshot from "../images/headshot.png"

function Home(props) {
    return (
        <section className="home-section">
            <div className="intro-card">
                <h1>I'm a software engineer who is passionate<br/>about turning obstacles into opportunity,</h1>
                <p>focusing on the human stuck in the middle.</p>
                <img src={headshot}/>
            </div>
        </section>
    )
}

export default Home