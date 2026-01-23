import Header from '@/components/Header'
import WebHeader from '@/components/WebHeader'
import Section from '@/components/Section'
import WebSection from '@/components/WebSection'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import WebProjects from '@/components/WebProjects'
import PrintButton from '@/components/PrintButton'
import WhatsAppButton from '@/components/WhatsAppButton'
import { cvData } from '@/data/cv-data'
import { User, Briefcase, GraduationCap, Code, FolderOpen } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Versión Web */}
      <div className="print:hidden">
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          <WebHeader personalInfo={cvData.personalInfo} />
          
          <div className="container mx-auto px-6 py-16">
            <WebSection title="Sobre Mí" icon={<User size={32} />}>
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                  {cvData.summary}
                </p>
              </div>
            </WebSection>
            
            <WebSection title="Experiencia Profesional" icon={<Briefcase size={32} />}>
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <Experience experience={cvData.experience} />
              </div>
            </WebSection>
            
            <WebSection title="Educación" icon={<GraduationCap size={32} />}>
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <Education education={cvData.education} />
              </div>
            </WebSection>
            
            <WebSection title="Habilidades" icon={<Code size={32} />}>
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <Skills skills={cvData.skills} />
              </div>
            </WebSection>
            
            <WebSection title="Proyectos Destacados" icon={<FolderOpen size={32} />}>
              <WebProjects projects={cvData.projects} />
            </WebSection>
          </div>
        </main>
        
        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton phone={cvData.personalInfo.whatsapp} />
      </div>

      {/* Versión PDF */}
      <div className="hidden print:block">
        <main className="bg-white">
          <div className="print-page">
            <div className="print-header">
              <Header personalInfo={cvData.personalInfo} />
            </div>
            
            <div className="print:p-0">
              <Section title="Resumen Profesional" className="print-section">
                <p className="text-black text-sm leading-relaxed">{cvData.summary}</p>
              </Section>
              
              <Section title="Experiencia Laboral" className="print-section">
                <Experience experience={cvData.experience} />
              </Section>
              
              <Section title="Educación" className="print-section">
                <Education education={cvData.education} />
              </Section>
              
              <Section title="Habilidades" className="print-section">
                <Skills skills={cvData.skills} />
              </Section>
              
              <Section title="Proyectos Destacados" className="print-section">
                <Projects projects={cvData.projects} />
              </Section>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}