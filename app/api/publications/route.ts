import { NextResponse } from 'next/server'
import { getPublications } from '@/lib/publications'

export const revalidate = 86400

export async function GET() {
  try {
    const publications = await getPublications()
    return NextResponse.json(publications)
  } catch (error) {
    console.error('Failed to fetch publications from Zotero:', error)
    return NextResponse.json([], { status: 500 })
  }
}
