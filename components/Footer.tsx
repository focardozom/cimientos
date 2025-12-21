import { Heart, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cimientos-400 to-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="font-bold text-lg">CIMIENTOS</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Colectivo de Investigación Multidisciplinar sobre Innovación en Niñez y Transformación Social
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contacto@cimientos.org</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Colombia y Latinoamérica</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nuestra Misión</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Visibilizar la investigación sobre primera infancia desde un enfoque multidisciplinario, contribuyendo a la equidad y transformación social.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-1">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>para la primera infancia</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2024 CIMIENTOS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
