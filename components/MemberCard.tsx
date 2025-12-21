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

interface MemberCardProps {
  member: Member
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Profile Image */}
      <div className="relative h-48 bg-gradient-to-br from-cimientos-100 to-primary-100">
        <div className="absolute inset-0 flex items-center justify-center">
          {member.imageUrl ? (
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cimientos-400 to-primary-500 flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-white font-bold text-2xl">
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
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {member.name}
          </h3>
          {member.role && (
            <p className="text-sm font-semibold text-primary-600 mb-1">
              {member.role}
            </p>
          )}
          <p className="text-cimientos-600 font-medium text-sm">
            {member.affiliation}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{member.location}</span>
        </div>

        {/* Bio */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
          {member.bio}
        </p>

        {/* Interests */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Intereses en Primera Infancia:
          </h4>
          <div className="flex flex-wrap gap-2">
            {member.interests.map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent-100 text-accent-700 text-xs font-medium rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex space-x-2 pt-4 border-t border-gray-100">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-cimientos-100 text-gray-600 hover:text-cimientos-600 rounded-lg transition-colors duration-200"
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
              className="flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-cimientos-100 text-gray-600 hover:text-cimientos-600 rounded-lg transition-colors duration-200"
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
