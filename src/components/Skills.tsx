interface SkillsData {
  technical: string[]
  soft: string[]
}

interface SkillsProps {
  skills: SkillsData
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Habilidades Técnicas</h3>
        <div className="flex flex-wrap gap-2">
          {skills.technical.map((skill, index) => (
            <span
              key={index}
              className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Habilidades Blandas</h3>
        <div className="flex flex-wrap gap-2">
          {skills.soft.map((skill, index) => (
            <span
              key={index}
              className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}