interface EducationItem {
  institution: string
  degree: string
  period: string
  location: string
}

interface EducationProps {
  education: EducationItem[]
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="space-y-4">
      {education.map((edu, index) => (
        <div key={index} className="bg-accent p-4 rounded-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
              <h4 className="text-primary font-medium">{edu.institution}</h4>
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