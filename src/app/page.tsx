import Header from '@/components/Header'
import Section from '@/components/Section'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import PrintButton from '@/components/PrintButton'
import { cvData } from '@/data/cv-data'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto px-6 print:max-w-none print:px-0 print-page">
        <div className="print-header">
          <Header personalInfo={cvData.personalInfo} />
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 print:shadow-none print:rounded-none print:p-0">
          <Section title="Resumen Profesional" className="print-section">
            <p className="text-gray-700 leading-relaxed print:text-black print:text-sm">{cvData.summary}</p>
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
        
        <PrintButton />
      </div>
    </main>
  )
}