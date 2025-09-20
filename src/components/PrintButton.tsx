'use client'

export default function PrintButton() {
  return (
    <div className="text-center mt-8 no-print">
      <button 
        onClick={() => window.print()}
        className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Descargar PDF
      </button>
    </div>
  )
}