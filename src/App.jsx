import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import SEOHead from "./components/SEOHead";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsPage from "./components/ProjectsPage";
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    AOS.init({ duration: 1000, easing: "ease-in-out" });
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  // SEO data based on route
  const getSEOData = () => {
    switch (location.pathname) {
      case '/projects':
        return {
          title: "Projects - Debmalya Pan | Java Full Stack Developer Portfolio",
          description: "Explore Debmalya Pan's portfolio of innovative projects including Little Guardian, MediVault, AI-powered applications, IoT solutions, and full-stack web applications built with Java, Spring Boot, and React.",
          url: "https://debmalyapan.me/projects"
        };
      default:
        return {
          title: "Debmalya Pan - Java Full Stack Developer | Portfolio",
          description: "Passionate Java Full Stack Developer with expertise in Spring Boot, React, and IoT projects. Explore my portfolio featuring innovative web applications and technical solutions.",
          url: "https://debmalyapan.me"
        };
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 text-white min-h-screen">
      <SEOHead {...getSEOData()} />
      {/* Only show Navbar on home page */}

      {location.pathname === "/" && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;