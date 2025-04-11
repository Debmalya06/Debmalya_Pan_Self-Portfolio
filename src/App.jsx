"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/MyHero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Certifications from "./components/Certification"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("App loading state before timeout:", loading);
    const timer = setTimeout(() => {
      setLoading(false);
      console.log("App loading state set to false");
    }, 2000);
  
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App