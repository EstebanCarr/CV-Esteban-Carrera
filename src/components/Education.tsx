'use client'

interface EducationItem {
  institution: string
  degree: string
  period: string
  location: string
  website?: string
}

interface EducationProps {
  education: EducationItem[]
}

export default function Education({ education }: EducationProps) {
  const handleInstitutionClick = (website?: string) => {
    if (website) {
      const url = website.startsWith('http') ? website : `https://${website}`
      window.open(url, '_blank')
    }
  }

  return (
    <div className="space-y-4">
      {education.map((edu, index) => (
        <div 
          key={index} 
          className={`bg-accent p-4 rounded-lg transition-all ${
            edu.website ? 'cursor-pointer hover:shadow-md hover:bg-blue-50' : ''
          }`}
          onClick={() => handleInstitutionClick(edu.website)}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
              <h4 className={`font-medium ${
                edu.website ? 'text-primary hover:underline' : 'text-primary'
              }`}>
                {edu.institution}
                {edu.website && <span className="ml-2 text-xs">↗</span>}
              </h4>
            </div>
            <div className="text-sm text-gray-600 md:text-right">
              <div>{edu.period}</div>
              <div>{edu.location}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}