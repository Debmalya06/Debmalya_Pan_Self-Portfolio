import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
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

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 text-white min-h-screen">
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