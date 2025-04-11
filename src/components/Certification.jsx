import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa"

const Certifications = () => {
  const certifications = [
    {
      title: "Udemy Java Training",
      issuer: "Udemy",
      date: "2023",
      link: "#",
      icon: <FaCertificate size={24} className="text-yellow-500" />,
    },
    {
      title: "Java Master Class",
      issuer: "Tutorials Point",
      date: "2023",
      link: "#",
      icon: <FaCertificate size={24} className="text-yellow-500" />,
    },
    {
      title: "AI Search Method for Problem Solving",
      issuer: "NPTL",
      date: "2022",
      link: "#",
      icon: <FaCertificate size={24} className="text-yellow-500" />,
    },
    {
      title: "AWS AI-ML Virtual Internship",
      issuer: "EduSkill",
      date: "2023",
      link: "#",
      icon: <FaCertificate size={24} className="text-yellow-500" />,
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm committed to continuous learning and professional development. Here are some of the certifications I've
            earned to enhance my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-1">{cert.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Issued by {cert.issuer} • {cert.date}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm"
                  >
                    View Certificate <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications