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

      {/* Versión PDF - DISEÑO COMPACTO */}
      <div className="hidden print:block">
        <div style={{ margin: 0, padding: 0, fontSize: '8pt', lineHeight: 1.2 }}>
          {/* Header compacto con foto */}
          <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', color: 'white', padding: '4mm', marginBottom: '2mm', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: '16pt', margin: 0, fontWeight: 'bold', marginBottom: '1mm' }}>{cvData.personalInfo.name}</h1>
              <h2 style={{ fontSize: '11pt', margin: 0, fontWeight: 'normal', opacity: 0.95, marginBottom: '2mm' }}>{cvData.personalInfo.title}</h2>
              <div style={{ fontSize: '7.5pt', display: 'flex', gap: '4mm', flexWrap: 'wrap', opacity: 0.9 }}>
                <span>📧 {cvData.personalInfo.email}</span>
                <span>📱 {cvData.personalInfo.phone}</span>
                <span>📍 {cvData.personalInfo.location}</span>
              </div>
            </div>
            <div style={{ marginLeft: '4mm' }}>
              <img 
                src="/ESTEBAN.png" 
                alt="Foto" 
                style={{ 
                  width: '28mm', 
                  height: '28mm', 
                  borderRadius: '50%', 
                  border: '3pt solid white',
                  objectFit: 'cover',
                  boxShadow: '0 2mm 4mm rgba(0,0,0,0.2)'
                }} 
              />
            </div>
          </div>

          {/* Resumen */}
          <div style={{ marginBottom: '3mm', padding: '2mm', background: '#f8fafc', borderLeft: '3pt solid #1e40af' }}>
            <h3 style={{ fontSize: '11pt', fontWeight: 'bold', margin: 0, marginBottom: '1.5mm', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.5pt' }}>Resumen Profesional</h3>
            <p style={{ fontSize: '8pt', margin: 0, lineHeight: 1.4, color: '#334155' }}>{cvData.summary}</p>
          </div>

          {/* Experiencia */}
          <div style={{ marginBottom: '3mm' }}>
            <h3 style={{ fontSize: '11pt', fontWeight: 'bold', margin: 0, marginBottom: '2mm', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.5pt', borderBottom: '2pt solid #1e40af', paddingBottom: '1mm' }}>Experiencia Profesional</h3>
            {cvData.experience.map((job, index) => (
              <div key={index} style={{ marginBottom: '2.5mm', paddingLeft: '4mm', borderLeft: '2.5pt solid #3b82f6', position: 'relative', background: index % 2 === 0 ? '#ffffff' : '#f8fafc', padding: '2mm', paddingLeft: '4mm' }}>
                <div style={{ position: 'absolute', left: '-4.5mm', top: '2mm', width: '7mm', height: '7mm', background: '#1e40af', borderRadius: '50%', border: '2pt solid white' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1mm' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '9.5pt', fontWeight: 'bold', margin: 0, color: '#0f172a' }}>{job.position}</div>
                    <div style={{ fontSize: '8.5pt', color: '#1e40af', margin: 0, fontWeight: '600' }}>{job.company}</div>
                  </div>
                  <div style={{ fontSize: '7.5pt', textAlign: 'right', color: '#64748b' }}>
                    <div style={{ fontWeight: '600' }}>{job.period}</div>
                    <div>{job.location} • {job.workMode}</div>
                  </div>
                </div>
                <ul style={{ margin: 0, padding: 0, paddingLeft: '14px', fontSize: '7.5pt', lineHeight: 1.35, color: '#475569' }}>
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} style={{ marginBottom: '0.8mm' }}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Educación */}
          <div style={{ marginBottom: '3mm' }}>
            <h3 style={{ fontSize: '11pt', fontWeight: 'bold', margin: 0, marginBottom: '2mm', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.5pt', borderBottom: '2pt solid #1e40af', paddingBottom: '1mm' }}>Educación</h3>
            {cvData.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: '2mm', padding: '2mm', background: '#f1f5f9', borderLeft: '3pt solid #3b82f6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '9pt', fontWeight: 'bold', margin: 0, color: '#0f172a' }}>{edu.degree}</div>
                    <div style={{ fontSize: '8pt', color: '#1e40af', margin: 0, fontWeight: '600' }}>{edu.institution}</div>
                  </div>
                  <div style={{ fontSize: '7.5pt', textAlign: 'right', color: '#64748b' }}>
                    <div style={{ fontWeight: '600' }}>{edu.period}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Habilidades */}
          <div style={{ marginBottom: '3mm' }}>
            <h3 style={{ fontSize: '11pt', fontWeight: 'bold', margin: 0, marginBottom: '2mm', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.5pt', borderBottom: '2pt solid #1e40af', paddingBottom: '1mm' }}>Habilidades</h3>
            <div style={{ marginBottom: '2mm' }}>
              <div style={{ fontSize: '9pt', fontWeight: 'bold', marginBottom: '1mm', color: '#334155' }}>Técnicas</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5mm' }}>
                {cvData.skills.technical.map((skill, index) => (
                  <span key={index} style={{ fontSize: '7pt', background: '#1e40af', color: 'white', padding: '1mm 2mm', borderRadius: '3mm', display: 'inline-block', fontWeight: '500' }}>{skill}</span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '2mm' }}>
              <div style={{ fontSize: '9pt', fontWeight: 'bold', marginBottom: '1mm', color: '#334155' }}>Blandas</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5mm' }}>
                {cvData.skills.soft.map((skill, index) => (
                  <span key={index} style={{ fontSize: '7pt', background: '#7c3aed', color: 'white', padding: '1mm 2mm', borderRadius: '3mm', display: 'inline-block', fontWeight: '500' }}>{skill}</span>
                ))}
              </div>
            </div>
            {cvData.skills.languages && (
              <div>
                <div style={{ fontSize: '9pt', fontWeight: 'bold', marginBottom: '1mm', color: '#334155' }}>Idiomas</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5mm' }}>
                  {cvData.skills.languages.map((lang, index) => (
                    <span key={index} style={{ fontSize: '7pt', background: '#059669', color: 'white', padding: '1mm 2mm', borderRadius: '3mm', display: 'inline-block', fontWeight: '500' }}>{lang}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Proyectos */}
          <div style={{ marginBottom: '0' }}>
            <h3 style={{ fontSize: '11pt', fontWeight: 'bold', margin: 0, marginBottom: '2mm', color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.5pt', borderBottom: '2pt solid #1e40af', paddingBottom: '1mm' }}>Proyectos Destacados</h3>
            {cvData.projects.map((project, index) => (
              <div key={index} style={{ marginBottom: '2mm', padding: '2mm', border: '1pt solid #cbd5e1', background: '#ffffff', borderRadius: '1mm' }}>
                <div style={{ fontSize: '9pt', fontWeight: 'bold', margin: 0, marginBottom: '1mm', color: '#0f172a' }}>{project.name}</div>
                <p style={{ fontSize: '7.5pt', margin: 0, marginBottom: '1mm', lineHeight: 1.35, color: '#475569' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1mm' }}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} style={{ fontSize: '6.5pt', background: '#e2e8f0', color: '#334155', padding: '0.8mm 1.5mm', display: 'inline-block', borderRadius: '2mm', fontWeight: '500' }}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}