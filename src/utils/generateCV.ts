'use client'

import jsPDF from 'jspdf'
import { cvData } from '@/data/cv-data'

const BLUE_DARK = [30, 64, 175] as [number, number, number]
const BLUE_MID = [59, 130, 246] as [number, number, number]
const GRAY_DARK = [15, 23, 42] as [number, number, number]
const GRAY_MID = [71, 85, 105] as [number, number, number]
const WHITE = [255, 255, 255] as [number, number, number]
const LIGHT_BG = [248, 250, 252] as [number, number, number]

const PAGE_W = 210
const PAGE_H = 297
const MARGIN = 12
const COL_W = PAGE_W - MARGIN * 2

// Carga imagen como base64 desde la carpeta public
async function loadImageAsBase64(src: string): Promise<string | null> {
  try {
    const res = await fetch(src)
    const blob = await res.blob()
    return await new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result as string)
      reader.onerror = () => resolve(null)
      reader.readAsDataURL(blob)
    })
  } catch {
    return null
  }
}

export async function generateCV() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true })
  doc.setCharSpace(0)
  let y = 0

  // Cargar foto de perfil
  const photoBase64 = await loadImageAsBase64('/images/ESTEBAN.jpg')

  // ── HEADER ──────────────────────────────────────────────────────────────────
  const headerH = photoBase64 ? 46 : 40
  doc.setFillColor(...BLUE_DARK)
  doc.rect(0, 0, PAGE_W, headerH, 'F')

  // Foto circular (recortada con clip)
  if (photoBase64) {
    const photoSize = 30
    const photoX = PAGE_W - MARGIN - photoSize
    const photoY = (headerH - photoSize) / 2
    doc.addImage(photoBase64, 'JPEG', photoX, photoY, photoSize, photoSize, undefined, 'FAST')
  }

  const textMaxW = photoBase64 ? COL_W - 36 : COL_W

  doc.setTextColor(...WHITE)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text(cvData.personalInfo.name, MARGIN, 13)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(186, 230, 253)
  const titleLines = doc.splitTextToSize(cvData.personalInfo.title, textMaxW)
  doc.text(titleLines, MARGIN, 20)

  doc.setFontSize(7.5)
  doc.setTextColor(...WHITE)
  const contacts = [
    cvData.personalInfo.email,
    cvData.personalInfo.phone,
    cvData.personalInfo.location,
  ]
  let cx = MARGIN
  contacts.forEach((c) => {
    doc.setFont('helvetica', 'normal')
    doc.setCharSpace(0)
    doc.text(c, cx, 30)
    cx += doc.getTextWidth(c) + 8
  })

  doc.setTextColor(186, 230, 253)
  doc.setFontSize(7)
  doc.setCharSpace(0)
  doc.text('linkedin.com/in/esteban-javier-carrera-salazar', MARGIN, 36)
  doc.text('github.com/EstebanCarr', MARGIN + 100, 36)

  y = headerH + 5

  // ── RESUMEN ──────────────────────────────────────────────────────────────────
  y = sectionTitle(doc, 'RESUMEN PROFESIONAL', y)
  const summaryLines = doc.splitTextToSize(cvData.summary, COL_W - 6)
  const summaryH = summaryLines.length * 3.4 + 6
  doc.setFillColor(...LIGHT_BG)
  doc.roundedRect(MARGIN, y, COL_W, summaryH, 2, 2, 'F')
  doc.setFillColor(...BLUE_MID)
  doc.rect(MARGIN, y, 2, summaryH, 'F')
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...GRAY_DARK)
  doc.text(summaryLines, MARGIN + 5, y + 4)
  y += summaryH + 4

  // ── EXPERIENCIA ──────────────────────────────────────────────────────────────
  y = sectionTitle(doc, 'EXPERIENCIA PROFESIONAL', y)

  cvData.experience.forEach((job, i) => {
    // Máximo 4 logros para mantener el CV compacto
    const topAchievements = job.achievements.slice(0, 4)
    const achLines = topAchievements.map((a) =>
      doc.splitTextToSize('• ' + a, COL_W - 12)
    )
    const achHeight = achLines.reduce((s, l) => s + l.length * 3.2, 0)
    const blockH = 13 + achHeight + 3

    if (y + blockH > PAGE_H - 15) {
      doc.addPage()
      y = 12
    }

    doc.setFillColor(i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 250, i % 2 === 0 ? 255 : 252)
    doc.roundedRect(MARGIN, y, COL_W, blockH, 2, 2, 'F')
    doc.setFillColor(...BLUE_MID)
    doc.rect(MARGIN, y, 2.5, blockH, 'F')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.setTextColor(...GRAY_DARK)
    doc.text(job.position, MARGIN + 6, y + 5)

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.setTextColor(...BLUE_DARK)
    doc.text(job.company, MARGIN + 6, y + 10)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    doc.setTextColor(...GRAY_MID)
    doc.text(job.period, PAGE_W - MARGIN, y + 5, { align: 'right' })
    doc.text(`${job.location} • ${job.workMode}`, PAGE_W - MARGIN, y + 10, { align: 'right' })

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(...GRAY_MID)
    let ay = y + 13
    achLines.forEach((lines) => {
      doc.text(lines, MARGIN + 6, ay)
      ay += lines.length * 3.2
    })

    y += blockH + 2
  })

  // ── EDUCACIÓN ────────────────────────────────────────────────────────────────
  // Reservar espacio suficiente: título (8mm) + bloques
  const eduNeeded = 8 + cvData.education.length * 15
  if (y + eduNeeded > PAGE_H - 15) { doc.addPage(); y = 12 }
  y = sectionTitle(doc, 'EDUCACIÓN', y)

  cvData.education.forEach((edu) => {
    if (y + 15 > PAGE_H - 15) { doc.addPage(); y = 12 }

    const degreeLines = doc.splitTextToSize(edu.degree, COL_W - 60)
    const blockH = Math.max(14, degreeLines.length * 4 + 6)

    doc.setFillColor(241, 245, 249)
    doc.roundedRect(MARGIN, y, COL_W, blockH, 2, 2, 'F')
    doc.setFillColor(...BLUE_MID)
    doc.rect(MARGIN, y, 2.5, blockH, 'F')

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8.5)
    doc.setTextColor(...GRAY_DARK)
    doc.text(degreeLines, MARGIN + 6, y + 5)

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.setTextColor(...BLUE_DARK)
    doc.text(edu.institution, MARGIN + 6, y + 5 + degreeLines.length * 4)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    doc.setTextColor(...GRAY_MID)
    doc.text(edu.period, PAGE_W - MARGIN, y + 5, { align: 'right' })
    doc.text(edu.location, PAGE_W - MARGIN, y + 10, { align: 'right' })

    y += blockH + 2
  })

  // ── HABILIDADES ──────────────────────────────────────────────────────────────
  const skillsNeeded = 8 + 30
  if (y + skillsNeeded > PAGE_H - 15) { doc.addPage(); y = 12 }
  y = sectionTitle(doc, 'HABILIDADES', y)

  y = skillGroup(doc, 'Técnicas', cvData.skills.technical, y, BLUE_DARK, WHITE)
  y = skillGroup(doc, 'Blandas', cvData.skills.soft, y, [100, 116, 139] as [number, number, number], WHITE)
  y = skillGroup(doc, 'Idiomas', cvData.skills.languages, y, [16, 185, 129] as [number, number, number], WHITE)

  // ── FOOTER ───────────────────────────────────────────────────────────────────
  const pages = doc.getNumberOfPages()
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p)
    doc.setFillColor(...BLUE_DARK)
    doc.rect(0, PAGE_H - 7, PAGE_W, 7, 'F')
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    doc.setTextColor(...WHITE)
    doc.text(`${cvData.personalInfo.name} • CV Profesional`, MARGIN, PAGE_H - 2.5)
    doc.text(`${p} / ${pages}`, PAGE_W - MARGIN, PAGE_H - 2.5, { align: 'right' })
  }

  doc.save('CV_Esteban_Carrera_Salazar.pdf')
}

// ── helpers ───────────────────────────────────────────────────────────────────

function sectionTitle(doc: jsPDF, title: string, y: number): number {
  // Título ENCIMA de la línea, con espacio correcto
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9.5)
  doc.setTextColor(...BLUE_DARK)
  doc.text(title, MARGIN, y + 4)
  // Línea debajo del título
  doc.setFillColor(...BLUE_DARK)
  doc.rect(MARGIN, y + 6, COL_W, 0.6, 'F')
  return y + 10  // retorna y ya después de la línea, listo para el contenido
}

function skillGroup(
  doc: jsPDF,
  label: string,
  items: string[],
  y: number,
  bg: [number, number, number],
  fg: [number, number, number]
): number {
  if (y + 12 > PAGE_H - 15) { doc.addPage(); y = 12 }
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.setTextColor(...GRAY_DARK)
  doc.text(label, MARGIN, y + 4)
  y += 6
  return renderTags(doc, items, y, bg, fg)
}

function renderTags(
  doc: jsPDF,
  items: string[],
  y: number,
  bg: [number, number, number],
  fg: [number, number, number]
): number {
  const tagH = 5
  const padX = 2.5
  const padY = 1.5
  const gap = 1.5
  let x = MARGIN

  items.forEach((item) => {
    doc.setFontSize(7)
    const tw = doc.getTextWidth(item)
    const tagW = tw + padX * 2

    if (x + tagW > PAGE_W - MARGIN) {
      x = MARGIN
      y += tagH + gap
    }

    doc.setFillColor(...bg)
    doc.roundedRect(x, y, tagW, tagH, 1.5, 1.5, 'F')
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    doc.setTextColor(...fg)
    doc.text(item, x + padX, y + tagH - padY)

    x += tagW + gap
  })

  return y + tagH + 4
}
