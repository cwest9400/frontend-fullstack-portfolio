import React, { useState, useEffect } from "react";

function About(props) {
  //CREATE STATE TO HOLD ABOUT DATA
  const [about, setAbout] = useState(null);
  
  //CREATE FUNCTION TO MAKE API CALL
  const getAboutData = async () => {
    //MAKE API CALL AND GET RESPONSE
    const response = await fetch("./about.json");
    //TURN RESPONSE INTO JS OBJECT
    const data = await response.json();
    //SET THE ABOUT STATE TO THE DATA
    setAbout(data);
  };
  //MAKE AN INITIAL CALL FOR THE DATA INSIDE A useEffect hook, so it only happens once
  useEffect(() => getAboutData(), []);
  //DEFINE A FUNCTION THAT WILL RETURN THE JSX NEEDED ONCE WE GET THE DATA
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