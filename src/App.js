
import { Route, Routes } from "react-router-dom"
import React from 'react';
//IMPORT COMPONENTS
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProjectHeader from "./components/ProjectHeader";
//IMPORT PAGES
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"

function App() {
  const URL = "https://oldnebu.herokuapp.com/"
  
  
  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path ="/" element={<Home />}/>
      {/* <Route path ="/projects" element={<Projects />}/> */}
      <Route path ="/project/:name" element={<ProjectDetails />}/>
      {/* <Route path ="/about" element={<About />}/> */}
      {/* <Route path ="/projects" element={<Projects URL={URL} />}/>
      <Route path ="/about" element={<About URL={URL} />}/> */}
    </Routes>
   
    <Footer />
    </div>
  );
}

export default App;
