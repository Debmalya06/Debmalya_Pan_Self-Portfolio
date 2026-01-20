import { 
  FaJava, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaReact,
  FaDocker
} from "react-icons/fa";
import { 
  SiHibernate, 
  SiMysql, 
  SiMongodb, 
  SiTailwindcss, 
  SiSpringboot, 
  SiPostman, 
  SiArduino,
  SiApachemaven,
  SiRender,
  SiC
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdSensors } from "react-icons/md";

const skills = [
  { name: "Java", icon: <FaJava size={50} />, color: "text-blue-500" },
  { name: "C", icon: <SiC size={50} />, color: "text-blue-600" },
  { name: "JavaScript", icon: <FaJs size={50} />, color: "text-yellow-400" },
  { name: "HTML5", icon: <FaHtml5 size={50} />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt size={50} />, color: "text-blue-600" },
  { name: "Spring Boot", icon: <SiSpringboot size={50} />, color: "text-green-600" },
  { name: "Hibernate", icon: <SiHibernate size={50} />, color: "text-yellow-600" },
  { name: "REST API", icon: <TbApi size={50} />, color: "text-purple-500" },
  { name: "MySQL", icon: <SiMysql size={50} />, color: "text-blue-700" },
  { name: "MongoDB", icon: <SiMongodb size={50} />, color: "text-green-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} />, color: "text-blue-400" },
  { name: "React", icon: <FaReact size={50} />, color: "text-blue-500" },
  { name: "Git", icon: <FaGitAlt size={50} />, color: "text-orange-600" },
  { name: "Maven", icon: <SiApachemaven size={50} />, color: "text-red-500" },
  { name: "Docker", icon: <FaDocker size={50} />, color: "text-blue-500" },
  { name: "Render", icon: <SiRender size={50} />, color: "text-teal-400" },
  { name: "Postman", icon: <SiPostman size={50} />, color: "text-orange-500" },
//   { name: "Arduino", icon: <SiArduino size={50} />, color: "text-blue-500" },
  { name: "IoT", icon: <MdSensors size={50} />, color: "text-green-400" },
];

export default function MySkill() {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300 skill-icon cursor-pointer"
            >
              <div className={`${skill.color} mb-3`}>
                {skill.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
