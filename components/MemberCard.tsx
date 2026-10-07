'use client'

import { MapPin, Mail, ExternalLink } from 'lucide-react'

export interface Member {
  id: string
  name: string
  role?: string
  affiliation: string
  location: string
  interests: string[]
  bio: string
  imageUrl: string
  email?: string
  website?: string
}

const photoBackgrounds = ['bg-brand-cyan/20', 'bg-brand-yellow/30', 'bg-brand-pink/20']

interface MemberCardProps {
  member: Member
  accentIndex?: number
}

const MemberCard = ({ member, accentIndex = 0 }: MemberCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-brand-brown/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 group">
      {/* Profile Image */}
      <div className={`relative h-48 ${photoBackgrounds[accentIndex % photoBackgrounds.length]}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {member.imageUrl ? (
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
            />
          ) : (
            <div className="w-36 h-36 rounded-full bg-brand-brown flex items-center justify-center border-4 border-white shadow-md">
              <span className="text-white font-display text-4xl">
                {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and Affiliation */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-1">
            {member.name}
          </h3>
          {member.role && (
            <p className="text-sm font-semibold mb-1">
              {member.role}
            </p>
          )}
          <p className="text-brand-brown/80 font-medium text-sm">
            {member.affiliation}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 text-brand-brown/80 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{member.location}</span>
        </div>

        {/* Bio */}
        <p className="text-brand-brown/80 text-sm leading-relaxed mb-4 line-clamp-3">
          {member.bio}
        </p>

        {/* Interests */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">
            Intereses en Primera Infancia:
          </h4>
          <div className="flex flex-wrap gap-2">
            {member.interests.map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-brand-pink/15 text-brand-brown text-xs font-medium rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex space-x-2 pt-4 border-t border-brand-brown/10">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center w-8 h-8 bg-brand-brown/5 hover:bg-brand-cyan/20 text-brand-brown/80 hover:text-brand-brown rounded-lg transition-colors duration-200"
              title="Enviar email"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 bg-brand-brown/5 hover:bg-brand-cyan/20 text-brand-brown/80 hover:text-brand-brown rounded-lg transition-colors duration-200"
              title="Visitar sitio web"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default MemberCard
