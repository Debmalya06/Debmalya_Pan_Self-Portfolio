"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Github, ExternalLink, ArrowLeft, Search } from "lucide-react"
import { allProjects } from "../data/projects"

const categories = ["All", "Web Development", "AI/ML", "IoT", "Mobile"]

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

const filteredProjects =
  selectedCategory === "All"
    ? allProjects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allProjects.filter(project =>
        (Array.isArray(project.category)
          ? project.category.includes(selectedCategory)
          : project.category === selectedCategory) &&
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold text-blue-400">{"<Debmalya/>"}</div>
            <div className="hidden md:flex items-center space-x-8">
             
              <div className="flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <ExternalLink className="w-5 h-5" />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Projects Page Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Back Button and Page Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">All Projects</h1>
          <p className="text-slate-400 text-lg">
            Explore my complete portfolio of projects spanning web development, AI/ML, IoT, and more.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded text-sm transition-colors ${
                  category === selectedCategory
                    ? "bg-blue-600 text-white"
                    : "border border-slate-600 text-slate-300 hover:border-blue-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-video bg-slate-700 rounded-t-lg overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg?height=200&width=400"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      project.status === "Completed" ? "bg-green-600" : "bg-yellow-600"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-blue-400 text-lg font-semibold">{project.title}</h3>
                  <span className="border border-slate-600 px-2 py-1 rounded text-xs text-slate-300">
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-300 space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-slate-600 rounded text-sm hover:border-blue-500 transition-colors">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No projects found matching your criteria.</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <button className="border border-slate-600 hover:border-blue-500 px-8 py-3 rounded-lg text-lg transition-colors">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
