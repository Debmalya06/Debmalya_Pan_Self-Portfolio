"use client"

import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa"
import Typed from "typed.js"

const MyHero = () => {
  const typedRef = useRef(null)
  const typedElementRef = useRef(null)

  useEffect(() => {
    if (typedElementRef.current) {
      typedRef.current = new Typed(typedElementRef.current, {
        strings: ["Java Full Stack Developer", "Backend Developer", "Frontend Developer", "IoT Enthusiast"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      })
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy()
      }
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      {/* Animated code particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="code-particles"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
              <img
                src="../img/debmalya.jpg?height=160&width=160"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span>Hi, I'm </span>
            <span className="gradient-text">Debmalya Pan</span>
          </h1>

          <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
            <span ref={typedElementRef}></span>
          </h2>

          <p className="max-w-2xl text-gray-300 mb-8 text-lg">
            Dynamic and motivated software developer with expertise in Java and backend technologies, complemented by
            strong problem-solving skills and a passion for creating innovative solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <FaEnvelope /> Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 flex items-center gap-2 border border-gray-700"
            >
              View Projects
            </a>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/debmalya06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:debmalyapan4@gmail.com" className="text-gray-300 hover:text-white transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <FaArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}

export default MyHero