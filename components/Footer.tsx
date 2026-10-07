import { Heart, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import BrandStripe from '@/components/BrandStripe'

const Footer = () => {
  return (
    <footer>
      <BrandStripe />
      <div className="bg-brand-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <Image
                src="/brand/logo-horizontal-blanco.svg"
                alt="CIMIENTOS"
                width={1600}
                height={440}
                className="h-14 w-auto"
              />
              <p className="text-white/80 text-sm leading-relaxed">
                Colectivo de Investigación Multidisciplinar sobre Innovación en Niñez y Transformación Social
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Contacto</h3>
              <div className="space-y-2">
                <a
                  href="mailto:colectivocimientos@gmail.com"
                  className="flex items-center space-x-2 text-white/80 hover:text-brand-yellow transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">colectivocimientos@gmail.com</span>
                </a>
                <div className="flex items-center space-x-2 text-white/80">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Colombia y Latinoamérica</span>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Nuestra misión</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Visibilizar la investigación sobre primera infancia desde un enfoque multidisciplinario, contribuyendo a la equidad y transformación social.
              </p>
            </div>
          </div>

          <div className="border-t border-white/15 mt-8 pt-8 text-center">
            <p className="text-white/80 text-sm flex items-center justify-center space-x-1">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-brand-pink fill-brand-pink" />
              <span>para la primera infancia</span>
            </p>
            <p className="text-white/60 text-xs mt-2">
              © 2026 CIMIENTOS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
