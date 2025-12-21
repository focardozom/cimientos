import { NextResponse } from 'next/server'
import { getPublications } from '@/lib/publications'

export async function GET() {
  const publications = getPublications()
  return NextResponse.json(publications)
}

