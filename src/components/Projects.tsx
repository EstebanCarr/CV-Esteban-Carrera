import { ExternalLink } from 'lucide-react'

interface Project {
  name: string
  description: string
  technologies: string[]
  link: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
            <ExternalLink size={18} className="text-primary cursor-pointer" />
          </div>
          
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-accent text-gray-700 px-2 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-4 text-sm text-primary font-medium">
            {project.link}
          </div>
        </div>
      ))}
    </div>
  )
}