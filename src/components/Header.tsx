import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react'

interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  website: string
}

interface HeaderProps {
  personalInfo: PersonalInfo
}

export default function Header({ personalInfo }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-lg mb-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
        <h2 className="text-xl font-light mb-6 opacity-90">{personalInfo.title}</h2>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={16} />
            <span>{personalInfo.linkedin}</span>
          </div>
          <div className="flex items-center gap-2">
            <Github size={16} />
            <span>{personalInfo.github}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span>{personalInfo.website}</span>
          </div>
        </div>
      </div>
    </header>
  )
}