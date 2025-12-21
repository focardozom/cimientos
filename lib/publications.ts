import { Publication } from '@/components/PublicationCard'
// @ts-ignore
import bibtexParse from 'bibtex-parse-js'
import fs from 'fs'
import path from 'path'

export function getPublications(): Publication[] {
  const bibPath = path.join(process.cwd(), 'data', 'publications.bib')
  
  if (!fs.existsSync(bibPath)) {
    return []
  }

  const bibContent = fs.readFileSync(bibPath, 'utf8')
  const parsed = bibtexParse.toJSON(bibContent)

  return parsed.map((entry: any, index: number) => {
    // Map BibTeX fields to Publication interface
    const tags: string[] = []
    if (entry.entryTags.keywords) {
      tags.push(...entry.entryTags.keywords.split(',').map((k: string) => k.trim()))
    }
    
    // Determine type from keywords or fallback to BibTeX entry type
    const type = determinePublicationType(entry.entryType, tags)
    
    return {
      id: entry.citationKey || `bib-${index}`,
      title: entry.entryTags.title || 'Sin título',
      description: entry.entryTags.abstract || entry.entryTags.note || '',
      type: type,
      authors: entry.entryTags.author 
        ? entry.entryTags.author.split(' and ').map((a: string) => a.trim())
        : [],
      date: entry.entryTags.year || '',
      downloadUrl: entry.entryTags.url || entry.entryTags.doi ? `https://doi.org/${entry.entryTags.doi}` : undefined,
      externalUrl: entry.entryTags.url,
      tags: tags
    }
  })
}

function determinePublicationType(bibType: string, tags: string[]): 'policy-brief' | 'opinion' | 'research' | 'position' {
  // First check tags for explicit type overrides
  const lowerTags = tags.map(t => t.toLowerCase())
  if (lowerTags.includes('policy brief') || lowerTags.includes('policy-brief')) return 'policy-brief'
  if (lowerTags.includes('opinion') || lowerTags.includes('op-ed') || lowerTags.includes('columna')) return 'opinion'
  if (lowerTags.includes('position paper') || lowerTags.includes('position')) return 'position'
  if (lowerTags.includes('research') || lowerTags.includes('investigación')) return 'research'

  // Fallback to BibTeX entry types
  const type = bibType.toLowerCase()
  if (type === 'techreport') return 'policy-brief'
  if (type === 'misc') return 'opinion'
  if (type === 'article' || type === 'inproceedings' || type === 'book' || type === 'phdthesis' || type === 'mastersthesis') return 'research'
  
  return 'research' // default
}

