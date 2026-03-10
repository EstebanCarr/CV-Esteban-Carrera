interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`mb-8 print:mb-0 ${className}`}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-primary print:text-xs print:mb-0 print:pb-0 print:mt-0 print:border-b">
        {title}
      </h2>
      <div className="print:mt-0">
        {children}
      </div>
    </section>
  )
}