import MemberCard from '@/components/MemberCard'
import PageHeader from '@/components/PageHeader'
import { Users, Heart, Globe, Search } from 'lucide-react'
import { members } from '@/data/members'

export default function CommunityPage() {
  const stats = [
    { icon: Users, label: 'Investigadoras/es', value: `${members.length}+`, tile: 'bg-brand-cyan text-white' },
    { icon: Globe, label: 'Países', value: '4', tile: 'bg-brand-yellow text-brand-brown' },
    { icon: Heart, label: 'Instituciones', value: '12+', tile: 'bg-brand-pink text-white' }
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        accent="pink"
        title="Nuestra comunidad"
        description="Una red multidisciplinar de investigadores/as comprometidos/as con la transformación de la primera infancia en Colombia y Latinoamérica"
      >
        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-brand-brown/10 shadow-sm flex items-center space-x-4">
              <div className={`w-12 h-12 ${stat.tile} rounded-lg flex items-center justify-center shrink-0`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display text-4xl leading-none">{stat.value}</div>
                <div className="text-brand-brown/80 text-sm mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </PageHeader>

      {/* Search and Filters Section */}
      <section className="py-12 bg-white border-b border-brand-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold">Miembros de la red</h2>
              <p className="text-brand-brown/80 mt-1">
                Conoce a quienes forman parte de CIMIENTOS
              </p>
            </div>

            {/* Search (placeholder for future functionality) */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-brown/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nombre, institución o intereses..."
                className="pl-10 pr-4 py-3 border border-brand-brown/20 rounded-full placeholder:text-brand-brown/50 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent w-full md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-20 bg-brand-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <MemberCard key={member.id} member={member} accentIndex={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-20 bg-brand-cyan">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              ¿Quieres unirte a nuestro colectivo?
            </h2>
            <p className="text-lg text-brand-brown/80 mb-8 leading-relaxed">
              Si eres investigador/a en primera infancia y compartes nuestros valores de equidad,
              rigor científico y transformación social, te invitamos a formar parte de CIMIENTOS.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h3 className="font-bold mb-2">Requisitos:</h3>
                <ul className="text-brand-brown/80 space-y-1 text-sm">
                  <li>• Formación, investigación o trabajo con políticas públicas, programas o prácticas basadas en la evidencia en disciplinas relacionadas con la primera infancia en Colombia</li>
                  <li>• Estar en etapas iniciales o medias de tu trayectoria profesional o investigativa, habiendo terminado estudios de maestría o doctorado máximo hace 7 años</li>
                  <li>• Participación con asistencia mensual a las reuniones del Colectivo, aportando de manera activa a los proyectos, productos y a la consolidación de la red</li>
                  <li>• Compromiso con la equidad y justicia social</li>
                  <li>• Interés en trabajo colaborativo e interdisciplinario</li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="font-bold mb-2">Beneficios:</h3>
                <ul className="text-brand-brown/80 space-y-1 text-sm">
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
              className="inline-flex items-center px-8 py-4 bg-brand-brown text-white font-semibold rounded-full hover:bg-brand-brown/90 transition-colors duration-200"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
