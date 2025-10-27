'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react'
import Image from 'next/image'

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
  const handleEmailClick = () => {
    window.open(`mailto:${personalInfo.email}`, '_blank')
  }

  const handlePhoneClick = () => {
    window.open(`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`, '_blank')
  }

  const handleLinkClick = (url: string) => {
    const fullUrl = url.startsWith('http') ? url : `https://${url}`
    window.open(fullUrl, '_blank')
  }

  return (
    <header className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg mb-8 print:mb-4 print:rounded-none">
      <div className="flex items-center justify-between p-8 pb-4 print:p-4 print:pb-2">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <h2 className="text-xl font-light opacity-90">{personalInfo.title}</h2>
        </div>
        <div className="ml-8">
          <Image
            src="/ESTEBAN.jpeg"
            alt="Esteban Javier Carrera Salazar"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg print:shadow-none"
            priority
            unoptimized
          />
        </div>
      </div>
      
      <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-b-lg print:p-3 print:rounded-none">
        <div className="flex flex-wrap justify-center gap-6 text-sm print:gap-3 print:text-xs">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all"
            onClick={handleEmailClick}
          >
            <Mail size={16} />
            <span>{personalInfo.email}</span>
          </div>
          <div 
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all"
            onClick={handlePhoneClick}
          >
            <Phone size={16} />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2">
            <MapPin size={16} />
            <span>{personalInfo.location}</span>
          </div>
          <div 
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all"
            onClick={() => handleLinkClick(personalInfo.linkedin)}
          >
            <Linkedin size={16} />
            <span>{personalInfo.linkedin}</span>
          </div>
          <div 
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all"
            onClick={() => handleLinkClick(personalInfo.github)}
          >
            <Github size={16} />
            <span>{personalInfo.github}</span>
          </div>
          <div 
            className="flex items-center gap-2 cursor-pointer hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-lg transition-all"
            onClick={() => handleLinkClick(personalInfo.website)}
          >
            <Globe size={16} />
            <span>{personalInfo.website}</span>
          </div>
        </div>
      </div>
    </header>
  )
}