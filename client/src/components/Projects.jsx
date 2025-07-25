"use client";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import { SiSpring, SiMysql, SiBootstrap, SiTailwindcss, SiArduino, SiCplusplus,SiPython,SiSpringboot, SiReact, SiMongodb,SiFastapi } from "react-icons/si";
import { FcWiFiLogo } from "react-icons/fc";
// import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [redirectLoading, setRedirectLoading] = useState(false);
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
      title: "AI-Powered-Email-Reply-Generator",
      description:
        "Designed to automate email responses using artificial intelligence. It integrates with Gmail to read incoming emails and generate contextually appropriate replies, streamlining email management and enhancing productivity.",
      image: "/img/Email.png?height=300&width=500",
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
      id: 2,
      title: "Hospital Management System",
      description:
        "A comprehensive hospital management system with role-based access control for doctors, administrators, and patients using Java, JSP, and MySQL.",
      image: "/img/hospital.png?height=300&width=500",
      category: "web",
      github: "https://github.com/debmalya06/DevLifeCare-Hospital ",
      demo: "#",
      technologies: [
        { name: "Java", icon: <FaJava className="text-blue-500" /> },
        { name: "JSP", icon: <FaJava className="text-red-500" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      ],
      features: [
        "Role-based access control for doctors, administrators, and patients",
        "MySQL database architecture for patient records and appointments",
        "Secure authentication and authorization using JSP",
        "CRUD operations for managing patients, appointments, and doctor details",
      ],
    },
    {
      id: 3,
      title: "Educare",
      description:
        "An educational learning platform providing access to courses, internships, and training opportunities for students using Spring Boot.",
      image: "/img/Educare.png?height=300&width=500",
      category: "web",
      github: "https://github.com/debmalya06/educare",
      demo: "#",
      technologies: [
        { name: "Spring Boot", icon: <SiSpringboot  className="text-green-600" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Database", icon: <FaDatabase className="text-yellow-500" /> },
      ],
      features: [
        "Course application system with automated confirmation emails",
        "Admin notification system for new applications",
        "Access to courses, internships, and training opportunities",
        "Ongoing development with planned features like online book storage",
      ],
    },

    {
        id: 4,
        title: "Devm Todo",
        description:
          "Devm Todo is a task management system built with Spring Boot & Thymeleaf that integrates Google's Gemini API to enhance task input with natural language processing (NLP). Users can add tasks in casual language, and the AI will correct and structure the input before saving it to the database..",
        image: "/img/todo.png?height=300&width=500",
        category: "web",
        github: "https://github.com/debmalya06/Devm-ToDo",
        demo: "#",
        technologies: [
          { name: "Spring Boot", icon: <SiSpringboot  className="text-green-600" /> },
          { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> }, 
          { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        ],
        features: [
          "Task Management: Add, edit, delete, and mark tasks as completed.",
          " Email Notifications: Get notified about pending tasks.",
          "User Authentication: Secure login/logout functionality."
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
      // {
      //   id: 6,
      //   title: "Dev-Hotel-Management",
      //   description:
      //     "A comprehensive hotel management system with user and employee authentication, secure registration, and database management using Spring Framework.",
      //   image: "/img/Hotel.png?height=300&width=500",
      //   category: "web",
      //   github: "https://github.com/debmalya06/Dev-Hotel-Management",
      //   demo: "#",
      //   technologies: [
      //     { name: "Spring Framework", icon: <SiSpring className="text-green-500" /> },
      //     { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      //     { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      //     { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      //     { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      //   ],
      //   features: [
      //     "User and employee authentication and authorization",
      //     "Secure registration and login with data validation",
      //     "MySQL database management system",
      //     "Seamless data flow between frontend and backend",
      //   ],
      // },
       {
        id: 6,
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
          "Developed over 10 REST APIs to handle facial recognition, feeding data, and emergency alerts while serving as the team’s lead backend developer. This enhanced system scalability and real-time response efficiency.",
          "Assure face-cover detection and emotion classification resulted in a 50% increase in safety coverage. Using Spring Security, ensure secure user authentication, and REST APIs were used to manage feeding data.",
      
        ],
      },
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab);



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
            <div key={project.id} className="project-card rounded-xl overflow-hidden card-hover">
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
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

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
