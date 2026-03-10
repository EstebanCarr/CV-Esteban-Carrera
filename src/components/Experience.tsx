interface ExperienceItem {
  company: string
  position: string
  period: string
  location: string
  workMode: string
  achievements: string[]
}

interface ExperienceProps {
  experience: ExperienceItem[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="space-y-6 print:space-y-0">
      {experience.map((job, index) => (
        <div key={index} className="border-l-4 border-primary pl-6 relative print-experience-item print:border-l-2 print:pl-2 print:mb-0">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1 print:hidden"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 print:mb-0 print:flex-row">
            <div className="print:mb-0 print:flex-1">
              <h3 className="text-xl font-semibold text-gray-800 print:text-[9pt] print:font-semibold print:mb-0 print:leading-tight">{job.position}</h3>
              <h4 className="text-lg font-medium text-primary print:text-[8pt] print:mb-0 print:leading-tight">{job.company}</h4>
            </div>
            <div className="text-sm text-gray-600 md:text-right print:text-[7pt] print:text-right print:flex-shrink-0">
              <div className="print:mb-0 print:leading-tight">{job.period}</div>
              <div className="print:mb-0 print:leading-tight">{job.location}</div>
              <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full inline-block mt-1 print:bg-gray-300 print:text-black print:px-1 print:py-0 print:rounded print:text-[6.5pt] print:mt-0 print:leading-tight">
                {job.workMode}
              </div>
            </div>
          </div>
          
          <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-black print:text-[7pt] print:space-y-0 print:leading-tight print:mt-0 print:mb-0 print:pl-3">
            {job.achievements.map((achievement, idx) => (
              <li key={idx} className="print:mb-0 print:leading-tight">{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}