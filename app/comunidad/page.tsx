import MemberCard from '@/components/MemberCard'
import { Users, Heart, Globe, Search } from 'lucide-react'
import { members } from '@/data/members'

export default function CommunityPage() {
  const stats = [
    { icon: Users, label: 'Investigadoras/es', value: `${members.length}+` },
    { icon: Globe, label: 'Países', value: '4' },
    { icon: Heart, label: 'Instituciones', value: '12+' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestra <span className="text-cimientos-600">Comunidad</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
              Una red multidisciplinar de investigadores/as comprometidos/as con la transformación 
              de la primera infancia en Colombia y Latinoamérica
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-cimientos-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-cimientos-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Miembros de la red</h2>
              <p className="text-gray-600 mt-1">
                Conoce a quienes forman parte de CIMIENTOS
              </p>
            </div>
            
            {/* Search (placeholder for future functionality) */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nombre, institución o intereses..."
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cimientos-500 focus:border-transparent w-full md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-20 gradient-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Quieres unirte a nuestro colectivo?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Si eres investigador/a en primera infancia y compartes nuestros valores de equidad, 
              rigor científico y transformación social, te invitamos a formar parte de CIMIENTOS.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Requisitos:</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Formación, investigación o trabajo con políticas públicas, programas o prácticas basadas en la evidencia en disciplinas relacionadas con la primera infancia en Colombia</li>
                  <li>• Estar en etapas iniciales o medias de tu trayectoria profesional o investigativa, con menos de 25 años de experiencia</li>
                  <li>• Participación con asistencia mensual a las reuniones del Colectivo, aportando de manera activa a los proyectos, productos y a la consolidación de la red</li>
                  <li>• Compromiso con la equidad y justicia social</li>
                  <li>• Interés en trabajo colaborativo e interdisciplinario</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Beneficios:</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Acceso a red colaborativa regional</li>
                  <li>• Oportunidades de publicación conjunta</li>
                  <li>• Participación en eventos y encuentros</li>
                  <li>• Retroalimentación académica y técnica en etapas tempranas de investigación y escritura</li>
                  <li>• Posibilidad de co-crear proyectos, propuestas y postulaciones a fondos</li>
                  <li>• Conexión con actores de política pública, organizaciones, investigadores y tomadores de decisión a nivel nacional e internacional</li>
                  <li>• Visibilización de tu agenda de investigación</li>
                </ul>
              </div>
            </div>

            <a
              href="mailto:contacto@cimientos.org?subject=Solicitud de membresía - CIMIENTOS"
              className="inline-flex items-center px-8 py-4 bg-cimientos-600 text-white font-semibold rounded-lg hover:bg-cimientos-700 transition-colors duration-200"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
