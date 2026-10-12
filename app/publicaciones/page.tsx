'use client'

import { useState, useEffect } from 'react'
import PublicationCard, { Publication } from '@/components/PublicationCard'
import FeaturedPublication from '@/components/FeaturedPublication'
import PageHeader from '@/components/PageHeader'

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

  const featured = publications.filter((publication) => publication.featured)
  const others = publications.filter((publication) => !publication.featured)

  return (
    <div className="min-h-screen">
      <PageHeader
        accent="cyan"
        title="Publicaciones"
        description="Accede a nuestras investigaciones, notas de política pública y documentos de posicionamiento"
      />

      {/* Content Section */}
      <section className="py-20 bg-brand-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {featured.length > 0 && (
              <div className="space-y-8 mb-12">
                {featured.map((publication) => (
                  <FeaturedPublication key={publication.id} publication={publication} />
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
