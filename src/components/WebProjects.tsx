'use client'

import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'

interface Project {
  name: string
  description: string
  technologies: string[]
  link: string
  image?: string
}

interface WebProjectsProps {
  projects: Project[]
}

export default function WebProjects({ projects }: WebProjectsProps) {
  const handleProjectClick = (link: string) => {
    const url = link.startsWith('http') ? link : `https://${link}`
    window.open(url, '_blank')
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
        >
          {project.image && (
            <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={200}
                height={120}
                className="object-contain max-h-32 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <button
                onClick={() => handleProjectClick(project.link)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <ExternalLink size={16} />
              </button>
            </div>
          )}
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
              {project.name}
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => handleProjectClick(project.link)}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
              >
                <Eye size={16} />
                Ver Proyecto
              </button>
              {project.link.includes('github') && (
                <button
                  onClick={() => handleProjectClick(project.link)}
                  className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg transition-all duration-300"
                >
                  <Github size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}