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
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <Header personalInfo={cvData.personalInfo} />
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Section title="Resumen Profesional">
            <p className="text-gray-700 leading-relaxed">{cvData.summary}</p>
          </Section>
          
          <Section title="Experiencia Laboral">
            <Experience experience={cvData.experience} />
          </Section>
          
          <Section title="Educación">
            <Education education={cvData.education} />
          </Section>
          
          <Section title="Habilidades">
            <Skills skills={cvData.skills} />
          </Section>
          
          <Section title="Proyectos Destacados">
            <Projects projects={cvData.projects} />
          </Section>
        </div>
        
        <PrintButton />
      </div>
    </main>
  )
}