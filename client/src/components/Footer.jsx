import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold code-font">
              <span className="text-blue-500">&lt;</span>
              <span className="gradient-text">Debmalya</span>
              <span className="text-blue-500">/&gt;</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Java Full Stack Developer specializing in building exceptional digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://github.com/debmalya06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:debmalyapan4@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">&copy; {currentYear} Debmalya Pan. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> using React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer