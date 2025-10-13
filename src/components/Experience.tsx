interface ExperienceItem {
  company: string
  position: string
  period: string
  location: string
  achievements: string[]
}

interface ExperienceProps {
  experience: ExperienceItem[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="space-y-6 print:space-y-3">
      {experience.map((job, index) => (
        <div key={index} className="border-l-4 border-primary pl-6 relative print-experience-item print:pl-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{job.position}</h3>
              <h4 className="text-lg font-medium text-primary">{job.company}</h4>
            </div>
            <div className="text-sm text-gray-600 md:text-right">
              <div>{job.period}</div>
              <div>{job.location}</div>
            </div>
          </div>
          
          <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-black print:text-sm print:space-y-0">
            {job.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}