import { FaBriefcase, FaCalendarAlt, FaCertificate } from "react-icons/fa"

const Experience = () => {
  const experienceData = [
    {
      position: "EduSkill Virtual Internship",
      company: "EduSkill",
      period: "2023",
      description:
        "Participated in a virtual internship program focused on machine learning and artificial intelligence supported by AWS. Explored practical applications of AI and ML through hands-on projects.",
      certificate: "AWS AI-ML Virtual Internship By EduSkill",
      icon: <FaBriefcase size={24} className="text-blue-500" />,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            My professional journey and hands-on experience in the tech industry.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-500 space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="relative timeline-item">
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 card-hover">
                  <div className="absolute -left-10 top-6 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{item.position}</h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <FaBriefcase className="text-green-500" />
                    <span>{item.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <FaCalendarAlt className="text-blue-500" />
                    <span>{item.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  {item.certificate && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaCertificate className="text-yellow-500" />
                      <span>Certificate: {item.certificate}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience