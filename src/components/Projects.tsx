'use client'

import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface Project {
  name: string
  description: string
  technologies: string[]
  link: string
  image?: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const handleProjectClick = (link: string) => {
    const url = link.startsWith('http') ? link : `https://${link}`
    window.open(url, '_blank')
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 print-project-grid print:gap-0 print:block">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group print-project-item print:shadow-none print:border print:border-gray-300 print:mb-0 print:rounded-none print:p-1"
          onClick={() => handleProjectClick(project.link)}
        >
          {project.image && (
            <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center print:hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={200}
                height={120}
                className="object-contain max-h-32 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300" />
            </div>
          )}
          
          <div className="p-6 print:p-1">
            <div className="flex justify-between items-start mb-3 print:mb-0">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors print:text-[9pt] print:mb-0 print:leading-tight">{project.name}</h3>
              <ExternalLink size={18} className="text-primary group-hover:scale-110 transition-transform print:hidden" />
            </div>
            
            <p className="text-gray-600 mb-4 print:text-[7pt] print:mb-0 print:leading-tight">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4 print:gap-0 print:mb-0">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-accent text-gray-700 px-2 py-1 rounded text-xs font-medium print:text-[6.5pt] print:px-1 print:py-0 print:mr-1 print:bg-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="text-sm text-primary font-medium group-hover:underline print:hidden">
              Ver proyecto →
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}