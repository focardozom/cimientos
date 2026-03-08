import { Publication } from '@/components/PublicationCard'

const ZOTERO_GROUP_ID = '6116204'
const ZOTERO_API_BASE = 'https://api.zotero.org'

interface ZoteroCreator {
  creatorType: string
  firstName: string
  lastName: string
}

interface ZoteroTag {
  tag: string
}

interface ZoteroItem {
  key: string
  data: {
    key: string
    itemType: string
    title: string
    creators: ZoteroCreator[]
    abstractNote: string
    date: string
    DOI: string
    url: string
    tags: ZoteroTag[]
    publicationTitle?: string
    volume?: string
    issue?: string
    pages?: string
    publisher?: string
  }
}

async function fetchAllItems(): Promise<ZoteroItem[]> {
  const items: ZoteroItem[] = []
  let start = 0
  const limit = 100

  while (true) {
    const url = `${ZOTERO_API_BASE}/groups/${ZOTERO_GROUP_ID}/items?format=json&itemType=-attachment&limit=${limit}&start=${start}&sort=date&direction=desc`
    const res = await fetch(url, {
      headers: { 'Zotero-API-Version': '3' },
      next: { revalidate: 86400 },
    })

    if (!res.ok) {
      console.error(`Zotero API error: ${res.status} ${res.statusText}`)
      break
    }

    const batch: ZoteroItem[] = await res.json()
    items.push(...batch)

    const totalResults = parseInt(res.headers.get('Total-Results') || '0', 10)
    start += limit
    if (start >= totalResults) break
  }

  return items
}

function formatAuthors(creators: ZoteroCreator[]): string[] {
  return creators
    .filter((c) => c.creatorType === 'author')
    .map((c) => `${c.lastName}, ${c.firstName}`)
}

function determinePublicationType(
  itemType: string,
  tags: string[]
): 'policy-brief' | 'opinion' | 'research' | 'position' {
  const lowerTags = tags.map((t) => t.toLowerCase())
  if (lowerTags.includes('policy brief') || lowerTags.includes('policy-brief')) return 'policy-brief'
  if (lowerTags.includes('opinion') || lowerTags.includes('op-ed') || lowerTags.includes('columna')) return 'opinion'
  if (lowerTags.includes('position paper') || lowerTags.includes('position')) return 'position'
  if (lowerTags.includes('research') || lowerTags.includes('investigación')) return 'research'

  const type = itemType.toLowerCase()
  if (type === 'report') return 'policy-brief'
  if (type === 'newspaperarticle' || type === 'blogpost' || type === 'magazinearticle') return 'opinion'
  if (['journalarticle', 'conferencepaper', 'book', 'booksection', 'thesis'].includes(type)) return 'research'

  return 'research'
}

export async function getPublications(): Promise<Publication[]> {
  const items = await fetchAllItems()

  return items.map((item) => {
    const { data } = item
    const tags = data.tags.map((t) => t.tag)
    const type = determinePublicationType(data.itemType, tags)

    const externalUrl = data.url || (data.DOI ? `https://doi.org/${data.DOI}` : undefined)

    return {
      id: data.key,
      title: data.title || 'Sin título',
      description: data.abstractNote || '',
      type,
      authors: formatAuthors(data.creators),
      date: data.date || '',
      downloadUrl: data.DOI ? `https://doi.org/${data.DOI}` : undefined,
      externalUrl,
      tags,
    }
  })
}
