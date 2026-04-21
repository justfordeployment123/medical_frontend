interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  center = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      {label && (
        <p className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="dot-blink" />
          {label}
        </p>
      )}
      <h2
        className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className={`text-lg text-muted leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
