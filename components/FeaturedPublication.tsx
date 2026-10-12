import { Star, Calendar, Users, Download, ExternalLink } from 'lucide-react'
import BrandStripe from '@/components/BrandStripe'
import { Publication } from '@/components/PublicationCard'

interface FeaturedPublicationProps {
  publication: Publication
}

const FeaturedPublication = ({ publication }: FeaturedPublicationProps) => {
  const isPdf = publication.externalUrl?.toLowerCase().endsWith('.pdf')
  const LinkIcon = isPdf ? Download : ExternalLink

  return (
    <article className="bg-brand-brown text-white rounded-2xl shadow-md overflow-hidden">
      <BrandStripe />
      <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-yellow text-brand-brown text-sm font-bold rounded-full">
              <Star className="w-4 h-4" />
              Publicación destacada
            </span>
            {publication.date && (
              <span className="inline-flex items-center gap-1.5 text-sm text-white/80">
                <Calendar className="w-4 h-4" />
                {publication.date}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
            {publication.title}
          </h2>

          {publication.source && (
            <p className="text-white/80 font-semibold mb-6">
              {publication.source}
            </p>
          )}

          <div className="flex items-start gap-2 mb-8">
            <Users className="w-4 h-4 mt-0.5 text-white/60 shrink-0" />
            <p className="text-sm text-white/80 leading-relaxed">
              {publication.authors.join('; ')}
            </p>
          </div>

          {publication.externalUrl && (
            <a
              href={publication.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-brown font-bold rounded-full hover:bg-white transition-colors duration-200"
            >
              <LinkIcon className="w-5 h-5" />
              {isPdf ? 'Descargar PDF' : 'Ver online'}
            </a>
          )}
        </div>

        <div className="lg:col-span-2">
          {publication.description && (
            <p className="text-white/85 text-sm leading-relaxed mb-6">
              {publication.description}
            </p>
          )}

          {publication.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {publication.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white/10 text-white/90 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default FeaturedPublication
