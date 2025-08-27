"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaReact  ,
} from "react-icons/fa";
import { SiSpring, SiMysql, SiBootstrap, SiTailwindcss, SiArduino, SiCplusplus,SiPython,SiSpringboot, SiReact, SiMongodb,SiFastapi,SiGooglechrome , SiJavascript } from "react-icons/si";
import { MdStorage as logo } from "react-icons/md";
import { FcWiFiLogo } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [redirectLoading, setRedirectLoading] = useState(false);
  const [expanded, setExpanded] = useState({}); // Track expanded state per project
  const navigate = useNavigate();

  const handleViewMore = () => {
    setRedirectLoading(true);
    setTimeout(() => {
      navigate("/projects");
    }, 1000); // 1 second loader, adjust as needed
  };

  const projects = [
    {
        id: 1,
        title: "Little Guardian",
        description:
          "Little Guardian is a web application that's integrated with IoT and ML to provide safety and baby care.",
        image: "/img/lg.jpg?height=300&width=500",
        category: "web",
        github: "https://github.com/Debmalya06/BabySafetyWebsiteWithIOT",
        demo: "https://www.littleguardian.work.gd",
        technologies: [
          { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
          { name: "React", icon: <SiReact className="text-blue-500" /> },
          { name: "Tailwind", icon: <SiTailwindcss className="text-blue-500" /> },
          { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
          { name: "MonGoDb", icon: <SiMongodb className="text-green-400" /> },
          { name: "Python", icon: <SiPython className="text-blue-400" /> },
          { name: "FastAPI", icon: < SiFastapi style={{color: '#009485'}} /> },

          
        ],
        features: [
          "Developed a web application that will integrate with baby observations and the safety IoT system.",
          "Developed over 10 REST APIs to handle facial recognition, feeding data, and emergency alerts",
          "Implemented a machine learning model to detect baby crying reason and show it on dashboard.",
          "Implemented a real-time alert system for emergencies, enhancing response time by 30%.",
      
        ],
      },
    {
      id: 2,
      title: "AI-Powered-Email-Reply-Generator",
      description:
        "Designed to automate email responses using artificial intelligence. It integrates with Gmail to read incoming emails and generate contextually appropriate replies, streamlining email management and enhancing productivity.",
      image: "/img/EmailReply.png?height=300&width=500",
      category: "web",
      github: "https://github.com/Debmalya06/AI-Powered-Email-Reply-Generator",
      demo: "https://ai-powered-email-reply-generator-1.onrender.com/",
      technologies: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-300" /> },
        { name: "Tailwindcss", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
      features: [
        "Utilizes AI models to craft relevant email replies.",
        "Provides a user-friendly interface for managing email interactions.",
        "USe chrome extension connects securely to Gmail accounts to fetch and respond to emails.",
      ],
    },
   
 
{
      id: 3,
      title: "Room Chat",
      description:
        "Room chat is a room based chat application where multiple users can join a room and chat with each other.",
      image: "/img/chat.png?height=300&width=500",
      category: "web",
      github: "https://github.com/Debmalya06/Chat-App",
      demo: "https://chat-app-38ks.onrender.com",
      technologies: [
        { name: "Spring Boot", icon: <SiSpringboot  className="text-green-600" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-blue-500" /> },
        { name: "React", icon: <SiReact className="text-blue-500" /> },
         { name: "MongoDB", icon: <SiMongodb className="text-green-300" /> },
      ],
      features: [
        "Designed a room-based chat web application where multiple user can connect at a time by joining the room",
        "Developed that web app using React.js, Tailwind, Spring Boot, MongoDB, WebSocket, REST API",
        "This application is easy to use and enhances the communications between 10+ users",
        
      ],
    },
    {
        id: 4,
        title: "MediVault",
        description:
          "A comprehensive medical management platform designed to streamline healthcare processes for patients, doctors, and administrators. MediVault offers appointment booking, medical record management, AI-powered assistance, and more—all in a secure, user-friendly environment.",
        image: "/img/MediVault.png?height=300&width=500",
        category: "web",
        github: "https://github.com/Debmalya06/MediVault",
        demo: "https://medivault-0drq.onrender.com/",
        technologies: [
          { name: "Java", icon: <FaJava className="text-blue-500" /> },
          { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
          { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
          { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> }, 
          { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
          { name: "Python", icon: <SiPython className="text-blue-400" /> },
        ],
        features: [
          "User Authentication: Secure login and registration for patients and admins",
          "Appointment Booking: Book, view, and manage appointments with doctors by specialization and availability",
          "Medical Reports: Upload, view, and analyze medical reports",
          "AI Assistance: Get instant medical insights and suggestions powered by AI"
        ],
      },
      {
        id: 5,
        title: "AI-based LPG Gas Leakage Detection and Fire Alert System",
        description:
          "The AI-based LPG Gas Leakage Detection and Fire Alert System is an innovative solution designed to enhance home safety by detecting LPG gas leaks and potential fire hazards. ",
        image: "/img/lpg.png?height=300&width=500",
        category: "iot",
        github: "https://github.com/debmalya06/AI-based-LPG-Gas-Leakage-Detection-Fire-Alert-System",
        demo: "https://youtu.be/ItU26umeodg?si=MYF8LyiZNyETIyuU",
        technologies: [
          { name: "Arduino IDE", icon: <SiArduino className="text-blue-500" /> },
          // { name: "DHT11 Sensor", icon: <FaDatabase className="text-yellow-500" /> },
          { name: "C++", icon: <SiCplusplus  className="text-blue-500" /> },
          { name: "Python", icon: <SiPython  className="text-blue-500" /> },
          { name: "Wifi Module", icon: <FcWiFiLogo   className="text-blue-500" /> },

        ],
        features: [
          "LPG Gas Detection: Advanced sensors detect LPG gas leaks, triggering an immediate alert.",
"Fire Detection: The system includes a fire detection mechanism.",
"Real-time Notifications: Automated WhatsApp notifications.",
"Comprehensive Safety: Ensures comprehensive home safety.",
        ],
      },
       {
      id: 6,
      title: "Research Sathi",
      description:
        "Research Sathi is a Chrome extension that enables users to highlight any text on a webpage and instantly generate a summary. It also allows users to save notes locally for future reference, making it a handy tool for efficient research and content curation directly within the browser.",
      image: "/img/Research.png?height=300&width=500",
      category: "web",
      github: "https://github.com/Debmalya06/Research-Sathi",
      demo: "#",
    technologies: [
  { name: "Java", icon: <FaJava className="text-blue-500" /> },
  { name: "Spring Boot", icon: <SiSpring className="text-green-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  // { name: "Chrome Extension", icon: <SiGooglechrome className="text-gray-600" /> },
  // { name: "LocalStorage", icon: <MdStorage className="text-green-600" /> },
],

     features: [
  "Text Highlight & Summarization: Instantly summarize selected text from any webpage.",
  "Local Note Saving: Save research notes directly in the browser with no cloud dependency.",
  "Distraction-Free Workflow: Enables focused research without switching tabs or tools.",
  "Lightweight & Fast: Minimalistic interface ensures smooth performance during browsing.",
],

    },
       
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeTab)
            : project.category === activeTab
        );



  const handleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
       <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project demonstrates my skills and expertise in different
            technologies and problem domains.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-full p-1">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "all" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Projects
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "web" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("web")}
            >
              Web Development
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "iot" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("iot")}
            >
              IoT
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card rounded-xl overflow-hidden card-hover flex flex-col h-full bg-gray-800"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>
              </div>
              {/* Make this div grow to fill space, pushing the button down */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                {expanded[project.id] && (
                  <>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md text-xs"
                            title={tech.name}
                          >
                            {tech.icon}
                            <span className="text-gray-300">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Spacer to push button to bottom */}
                <div className="flex-1"></div>
              <button
  className="mt-4 px-4 py-2 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded transition-all text-sm"
  onClick={() => handleExpand(project.id)}
>
  {expanded[project.id] ? "Hide Details" : "View More"}
</button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="https://github.com/debmalya06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 border border-gray-700"
          >
            <FaGithub /> View More on GitHub
          </a>
        </div> */}





            <div className="text-center">
          <button
            onClick={handleViewMore}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors m-5"
            disabled={redirectLoading}
          >
            {redirectLoading ? (
              <>
                <Loader />
                Redirecting...
              </>
            ) : (
              <>
                View More Projects
                <ExternalLink className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
      {/* Optionally, show Loader as overlay */}
      {redirectLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <Loader />
        </div>
      )}
    </section>
  );
};

export default Projects;
