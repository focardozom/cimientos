'use client'

import { FileText, Calendar, Users, ExternalLink, Download } from 'lucide-react'

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
          label: 'Policy Brief',
          icon: FileText,
          bgColor: 'bg-cimientos-100',
          textColor: 'text-cimientos-700',
          iconColor: 'text-cimientos-600'
        }
      case 'opinion':
        return {
          label: 'Columna de Opinión',
          icon: FileText,
          bgColor: 'bg-primary-100',
          textColor: 'text-primary-700',
          iconColor: 'text-primary-600'
        }
      case 'research':
        return {
          label: 'Investigación',
          icon: FileText,
          bgColor: 'bg-accent-100',
          textColor: 'text-accent-700',
          iconColor: 'text-accent-600'
        }
      case 'position':
        return {
          label: 'Documento de Posicionamiento',
          icon: FileText,
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-700',
          iconColor: 'text-gray-600'
        }
      default:
        return {
          label: 'Publicación',
          icon: FileText,
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-700',
          iconColor: 'text-gray-600'
        }
    }
  }

  const typeConfig = getTypeConfig(publication.type)
  const TypeIcon = typeConfig.icon

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        {/* Header with type and date */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 ${typeConfig.bgColor} rounded-lg flex items-center justify-center`}>
              <TypeIcon className={`w-4 h-4 ${typeConfig.iconColor}`} />
            </div>
            <span className={`text-sm font-medium ${typeConfig.textColor}`}>
              {typeConfig.label}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{publication.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {publication.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {publication.description}
        </p>

        {/* Authors */}
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-4 h-4 text-gray-400" />
          <p className="text-sm text-gray-600">
            {publication.authors.join(', ')}
          </p>
        </div>

        {/* Tags (Keywords) */}
        {publication.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {publication.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-3 pt-4 border-t border-gray-100">
          {publication.externalUrl && (
            <a
              href={publication.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
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
