import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaTools } from "react-icons/fa"
import { SiSpring, SiHibernate, SiMysql, SiMongodb, SiTailwindcss,SiSpringboot  } from "react-icons/si"

// import { useEffect } from "react"
// import AOS from "aos";
// import "aos/dist/aos.css";


// useEffect(() => {
//   AOS.init({
//     duration: 1000,
//     easing: "ease-in-out",
//     once: true, // Ensures animation occurs only once
//   });
// }, []);


const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaJava className="text-blue-500" size={24} />,
      skills: ["Java", "JavaScript", "Python", "C", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <SiSpring className="text-green-500" size={24} />,
      skills: ["Spring", "Spring Boot", "Hibernate", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-yellow-500" size={24} />,
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools className="text-purple-500" size={24} />,
      skills: ["Git", "REST APIs", "Visual Studio Code", "IntelliJ IDEA", "Excel", "PowerPoint"],
    },
    {
      title: "Soft Skills",
      icon: <FaGitAlt className="text-orange-500" size={24} />,
      skills: ["Analytical Thinking", "Problem-Solving", "Team Collaboration", "Project Management"],
    },
  ]

  const skillIcons = {
    Java: <FaJava size={40} className="text-blue-500" />,
    JavaScript: <FaJs size={40} className="text-yellow-400" />,
    Python: <FaPython size={40} className="text-blue-400" />,
    HTML: <FaHtml5 size={40} className="text-orange-500" />,
    CSS: <FaCss3Alt size={40} className="text-blue-600" />,
    Spring: <SiSpring size={40} className="text-green-500" />,
    "Spring Boot": <SiSpringboot  size={40} className="text-green-600" />,
    Hibernate: <SiHibernate size={40} className="text-yellow-600" />,
    MySQL: <SiMysql size={40} className="text-blue-700" />,
    MongoDB: <SiMongodb size={40} className="text-green-500" />,
    "Tailwind CSS": <SiTailwindcss size={40} className="text-blue-400" />,
    Git: <FaGitAlt size={40} className="text-orange-600" />,
  }

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">My Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my journey as a software developer. Here's a comprehensive
            overview of my technical expertise and competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-700/50 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div data-aos="zoom-in" className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400" >Technical Proficiency</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
            {Object.entries(skillIcons).map(([skill, icon], index) => (
              <div key={index} className="flex flex-col items-center gap-2 skill-icon">
                <div className="w-16 h-16 rounded-xl bg-gray-700/50 flex items-center justify-center">{icon}</div>
                <span className="text-sm text-gray-300 text-center">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills