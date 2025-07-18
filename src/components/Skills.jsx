import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaTools, FaReact } from "react-icons/fa";
import { SiSpring, SiHibernate, SiMysql, SiMongodb, SiTailwindcss, SiSpringboot, SiPostman, SiArduino } from "react-icons/si";

const skillIcons = [
  <FaJava size={40} className="text-blue-500" />,
  <FaJs size={40} className="text-yellow-400" />,
  <FaPython size={40} className="text-blue-400" />,
  <FaHtml5 size={40} className="text-orange-500" />,
  <FaCss3Alt size={40} className="text-blue-600" />,
  <SiSpring size={40} className="text-green-500" />,
  <SiSpringboot size={40} className="text-green-600" />,
  <SiHibernate size={40} className="text-yellow-600" />,
  <SiMysql size={40} className="text-blue-700" />,
  <SiMongodb size={40} className="text-green-500" />,
  <SiTailwindcss size={40} className="text-blue-400" />,
  <FaGitAlt size={40} className="text-orange-600" />,
  <FaReact size={40} className="text-blue-500" />,
  <SiPostman size={40} className="text-orange-500" />,
  <SiArduino size={40} className="text-blue-500" />,


];

// Duplicate icons to ensure smooth looping
const repeatedIcons = [...skillIcons, ...skillIcons];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center space-x-8 animate-scroll">
            {repeatedIcons.map((icon, index) => (
              <div key={index} className="flex justify-center items-center">{icon}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
