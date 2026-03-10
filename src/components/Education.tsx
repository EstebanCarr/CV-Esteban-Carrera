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
    <div className="space-y-4 print:space-y-0">
      {education.map((edu, index) => (
        <div 
          key={index} 
          className={`bg-accent p-4 rounded-lg transition-all print-education-item print:p-1 print:rounded-none print:bg-gray-100 print:mb-0 ${
            edu.website ? 'cursor-pointer hover:shadow-md hover:bg-blue-50' : ''
          }`}
          onClick={() => handleInstitutionClick(edu.website)}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start print:mb-0 print:flex-row">
            <div className="print:mb-0 print:flex-1">
              <h3 className="text-lg font-semibold text-gray-800 print:text-[9pt] print:mb-0 print:leading-tight">{edu.degree}</h3>
              <h4 className={`font-medium print:text-[8pt] print:mb-0 print:leading-tight ${
                edu.website ? 'text-primary hover:underline' : 'text-primary'
              }`}>
                {edu.institution}
                {edu.website && <span className="ml-2 text-xs print:hidden">↗</span>}
              </h4>
            </div>
            <div className="text-sm text-gray-600 md:text-right print:text-[7pt] print:mb-0 print:text-right print:flex-shrink-0">
              <div className="print:mb-0 print:leading-tight">{edu.period}</div>
              <div className="print:mb-0 print:leading-tight">{edu.location}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}