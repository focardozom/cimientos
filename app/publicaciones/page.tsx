'use client'

import { useState, useEffect } from 'react'
import PublicationCard, { Publication } from '@/components/PublicationCard'

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([])

  useEffect(() => {
    fetch('/api/publications')
      .then(res => res.json())
      .then(data => {
        setPublications(data)
      })
      .catch(err => console.error('Failed to load publications', err))
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Publicaciones
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Accede a nuestras investigaciones, policy briefs y documentos de posicionamiento
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publications.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
