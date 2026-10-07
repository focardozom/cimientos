'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Users, BookOpen, Info } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Nosotros', href: '/about', icon: Info },
    { name: 'Comunidad', href: '/comunidad', icon: Users },
    { name: 'Publicaciones', href: '/publicaciones', icon: BookOpen },
  ]

  const isActive = (href: string) => pathname.startsWith(href)
  const linkColors = (href: string) =>
    isActive(href)
      ? 'bg-brand-cyan/20 text-brand-brown'
      : 'text-brand-brown/80 hover:bg-brand-cyan/10 hover:text-brand-brown'

  return (
    <nav className="bg-white border-b border-brand-brown/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/brand/logo-horizontal-color.svg"
                alt="CIMIENTOS"
                width={1600}
                height={440}
                priority
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${linkColors(item.href)}`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown hover:text-brand-brown/70 focus:outline-none"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-brand-brown/10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-semibold ${linkColors(item.href)}`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
