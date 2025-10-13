interface WebSectionProps {
  title: string
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

export default function WebSection({ title, children, className = "", icon }: WebSectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          {icon && <div className="text-blue-600">{icon}</div>}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            {title}
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}