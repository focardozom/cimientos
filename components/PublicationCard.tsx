'use client'

import { FileText, Calendar, Users, ExternalLink } from 'lucide-react'

export interface Publication {
  id: string
  title: string
  description: string
  type: 'policy-brief' | 'opinion' | 'research' | 'position'
  authors: string[]
  date: string
  downloadUrl?: string
  externalUrl?: string
  tags: string[]
}

interface PublicationCardProps {
  publication: Publication
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
  const getTypeConfig = (type: string) => {
    switch (type) {
      case 'policy-brief':
        return {
          label: 'Nota de Política Pública',
          icon: FileText,
          accentColor: 'bg-brand-cyan',
          badgeColor: 'bg-brand-cyan/20'
        }
      case 'opinion':
        return {
          label: 'Columna de Opinión',
          icon: FileText,
          accentColor: 'bg-brand-yellow',
          badgeColor: 'bg-brand-yellow/30'
        }
      case 'research':
        return {
          label: 'Investigación',
          icon: FileText,
          accentColor: 'bg-brand-pink',
          badgeColor: 'bg-brand-pink/20'
        }
      case 'position':
        return {
          label: 'Documento de Posicionamiento',
          icon: FileText,
          accentColor: 'bg-brand-brown',
          badgeColor: 'bg-brand-brown/10'
        }
      default:
        return {
          label: 'Publicación',
          icon: FileText,
          accentColor: 'bg-brand-brown',
          badgeColor: 'bg-brand-brown/10'
        }
    }
  }

  const typeConfig = getTypeConfig(publication.type)
  const TypeIcon = typeConfig.icon

  return (
    <div className="bg-white rounded-xl border border-brand-brown/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className={`h-1.5 ${typeConfig.accentColor}`} />
      <div className="p-6">
        {/* Header with type and date */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 ${typeConfig.badgeColor} rounded-lg flex items-center justify-center`}>
              <TypeIcon className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold">
              {typeConfig.label}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-brand-brown/80">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{publication.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3">
          {publication.title}
        </h3>

        {/* Description */}
        <p className="text-brand-brown/80 text-sm mb-4 line-clamp-3 leading-relaxed">
          {publication.description}
        </p>

        {/* Authors */}
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-4 h-4 text-brand-brown/50 shrink-0" />
          <p className="text-sm text-brand-brown/80">
            {publication.authors.join(', ')}
          </p>
        </div>

        {/* Tags (Keywords) */}
        {publication.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {publication.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-brand-brown/5 text-brand-brown/80 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-3 pt-4 border-t border-brand-brown/10">
          {publication.externalUrl && (
            <a
              href={publication.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border border-brand-brown/20 text-brand-brown text-sm font-semibold rounded-full hover:bg-brand-cyan/15 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Ver online</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default PublicationCard
