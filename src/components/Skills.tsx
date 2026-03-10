interface SkillsData {
  technical: string[]
  soft: string[]
  languages?: string[]
}

interface SkillsProps {
  skills: SkillsData
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 print-skills-grid print:gap-0 print:block">
      <div className="print-skills-section print:mb-0">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 print:text-[9pt] print:mb-0 print:leading-tight">Habilidades Técnicas</h3>
        <div className="flex flex-wrap gap-2 print:gap-0">
          {skills.technical.map((skill, index) => (
            <span
              key={index}
              className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium print:text-[6.5pt] print:px-1 print:py-0 print:mr-1 print:mb-0 print:inline-block"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="print-skills-section print:mb-0">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 print:text-[9pt] print:mb-0 print:leading-tight">Habilidades Blandas</h3>
        <div className="flex flex-wrap gap-2 print:gap-0">
          {skills.soft.map((skill, index) => (
            <span
              key={index}
              className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium print:text-[6.5pt] print:px-1 print:py-0 print:mr-1 print:mb-0 print:inline-block"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {skills.languages && skills.languages.length > 0 && (
        <div className="print-skills-section md:col-span-2 print:mb-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 print:text-[9pt] print:mb-0 print:leading-tight">Idiomas</h3>
          <div className="flex flex-wrap gap-2 print:gap-0">
            {skills.languages.map((language, index) => (
              <span
                key={index}
                className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium print:text-[6.5pt] print:px-1 print:py-0 print:mr-1 print:mb-0 print:inline-block"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}