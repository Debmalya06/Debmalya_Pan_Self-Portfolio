import { FaGraduationCap, FaCalendarAlt, FaMedal } from "react-icons/fa"

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "JIS College of Engineering",
      period: "2022 - Present",
      score: "CGPA: 8.02",
      icon: <FaGraduationCap size={24} className="text-blue-500" />,
    },
    {
      degree: "Higher Secondary Education in Science (WBCHSE)",
      institution: "Vidyanagar Multi Purpose School",
      period: "2019 - 2021",
      score: "Percentage: 81%",
      icon: <FaGraduationCap size={24} className="text-blue-500" />,
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            My educational background has provided me with a strong foundation in technology and computer science.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-500 space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative timeline-item">
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 card-hover">
                  <div className="absolute -left-10 top-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{item.degree}</h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <FaMedal className="text-yellow-500" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <FaCalendarAlt className="text-blue-500" />
                    <span>{item.period}</span>
                  </div>
                  <div className="inline-block bg-blue-900/30 px-4 py-1 rounded-full text-blue-300 text-sm">
                    {item.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education