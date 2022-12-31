import React, { useState, useEffect } from "react";

function About(props) {

  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("https://oldnebu.herokuapp.com/about")
      .then((res) => res.json())
      .then((json) => {
        setAbout(json)
      })
      .catch(console.error)
  }, [])

  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );

  return (
    about ? loaded() : <h1>Loading...</h1>
  )
}

export default About