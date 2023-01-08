import headshot from "../images/headshot.png"

function Home(props) {
    return (
        <section className="home-section">
            <div className="intro-card">
                <h1>I'm a software engineer who is passionate<br/>about turning obstacles into opportunity,</h1>
                <h3>focusing on the human stuck in the middle.</h3>
                <img src={headshot}/>
            </div>
        </section>
    )
}

export default Home