type Accent = 'cyan' | 'yellow' | 'pink'

const accentBand: Record<Accent, string> = {
  cyan: 'bg-brand-cyan',
  yellow: 'bg-brand-yellow',
  pink: 'bg-brand-pink',
}

interface PageHeaderProps {
  title: React.ReactNode
  description?: React.ReactNode
  accent?: Accent
  children?: React.ReactNode
}

const PageHeader = ({ title, description, accent = 'cyan', children }: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-brand-brown/10">
      <div aria-hidden="true" className={`absolute inset-y-0 left-0 w-2 sm:w-3 lg:w-4 ${accentBand[accent]}`} />
      <div
        aria-hidden="true"
        className="hidden xl:block absolute -right-20 top-1/2 -translate-y-1/2 w-[560px] aspect-[1600/440] bg-[url('/brand/logo-horizontal-blanco.svg')] bg-contain bg-no-repeat invert opacity-[0.07] pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">
        <h1 className="font-display text-4xl md:text-6xl leading-tight text-brand-brown">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg md:text-xl text-brand-brown/80 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

export default PageHeader
