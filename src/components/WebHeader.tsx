'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Globe, Download } from 'lucide-react'
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

interface WebHeaderProps {
  personalInfo: PersonalInfo
}

export default function WebHeader({ personalInfo }: WebHeaderProps) {
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
    <header className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl lg:text-2xl font-light mb-8 text-blue-100">
              {personalInfo.title}
            </h2>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">{personalInfo.email}</span>
              </button>
              <button 
                onClick={handlePhoneClick}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Phone size={18} />
                <span className="hidden sm:inline">{personalInfo.phone}</span>
              </button>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} />
                <span className="hidden sm:inline">{personalInfo.location}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={() => handleLinkClick(personalInfo.linkedin)}
                className="flex items-center gap-2 border border-white/30 hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </button>
              <button 
                onClick={() => handleLinkClick(personalInfo.github)}
                className="flex items-center gap-2 border border-white/30 hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                <Github size={18} />
                <span>GitHub</span>
              </button>
              <button 
                onClick={() => handleLinkClick(personalInfo.website)}
                className="flex items-center gap-2 border border-white/30 hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                <Globe size={18} />
                <span>Portfolio</span>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm p-4">
              <Image
                src="/ESTEBAN.jpeg"
                alt="Esteban Javier Carrera Salazar"
                width={300}
                height={300}
                className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Disponible
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            Descargar CV
          </button>
        </div>
      </div>
    </header>
  )
}