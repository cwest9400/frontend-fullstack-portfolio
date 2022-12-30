import React, { useState, useEffect } from "react";

function About(props) {
  //CREATE STATE TO HOLD ABOUT DATA
  const [about, setAbout] = useState(null);
  
  useEffect(() => {
    fetch("./about.json")
    .then((res) => res.json())
    .then((json) => {
        setAbout(json)
    })
    .catch(console.error)
}, [])


  // useEffect(() => getAboutData(), []);
  // const getAboutData = async () => {
  //   const response = await fetch("./about.json");
  //   const data = await response.json();
  //   setAbout(data);
  // };
  
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