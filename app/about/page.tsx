import { Target, Eye, Heart, Users, BookOpen, Globe, Lightbulb, Scale } from 'lucide-react'
import PageHeader from '@/components/PageHeader'

const brandTiles = [
  'bg-brand-cyan text-white',
  'bg-brand-yellow text-brand-brown',
  'bg-brand-pink text-white',
  'bg-brand-brown text-white',
]

export default function AboutPage() {
  const values = [
    { icon: Heart, label: 'Equidad' },
    { icon: BookOpen, label: 'Evidencia' },
    { icon: Users, label: 'Colaboración' },
    { icon: Globe, label: 'Transformación' },
  ]

  const objectives = [
    {
      icon: Users,
      title: "Visibilizar Investigadores/as",
      description: "Amplificar la producción de conocimiento de una nueva generación de investigadoras/es."
    },
    {
      icon: Lightbulb,
      title: "Fomentar colaboración",
      description: "Promover la colaboración interdisciplinaria y el intercambio de metodologías innovadoras."
    },
    {
      icon: Scale,
      title: "Investigación equitativa",
      description: "Impulsar investigaciones sensibles al territorio, la equidad y la justicia social."
    },
    {
      icon: Globe,
      title: "Plataforma abierta",
      description: "Crear un espacio abierto para difundir investigaciones y propuestas."
    },
    {
      icon: BookOpen,
      title: "Incidencia política",
      description: "Influir en políticas públicas y programación con evidencia rigurosa."
    }
  ]

  const visionAreas = [
    { icon: BookOpen, title: 'Academia', description: 'Investigación rigurosa y metodologías innovadoras' },
    { icon: Users, title: 'Implementación', description: 'Aplicación directa en programas y servicios' },
    { icon: Scale, title: 'Política', description: 'Incidencia en decisiones de política pública' },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        accent="yellow"
        title="Sobre CIMIENTOS"
        description={
          <>
            Somos un <strong>Colectivo de Investigación Multidisciplinar sobre Innovación en Niñez y Transformación Social</strong>,
            comprometidos con la primera infancia en Colombia y Latinoamérica.
          </>
        }
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-brand-cyan/15 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-brown" />
                </div>
                <h2 className="text-3xl font-extrabold">Nuestra misión</h2>
              </div>
              <p className="text-lg text-brand-brown/80 leading-relaxed">
                Visibilizar la investigación sobre la primera infancia en Colombia desde un enfoque multidisciplinario,
                contribuyendo, desde la evidencia, a la equidad y a la transformación de programas y políticas públicas.
              </p>
            </div>
            <div className="bg-brand-cyan/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={value.label} className="text-center">
                    <div className={`w-16 h-16 ${brandTiles[index]} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold">{value.label}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-brand-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Objetivos específicos
            </h2>
            <p className="text-xl text-brand-brown/80 max-w-3xl mx-auto">
              Nuestros compromisos para generar impacto real en la primera infancia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-brand-brown/10 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-12 h-12 ${brandTiles[index % brandTiles.length]} rounded-lg flex items-center justify-center mb-4`}>
                  <objective.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">
                  {objective.title}
                </h3>
                <p className="text-brand-brown/80 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-brand-yellow/30 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-brand-brown" />
              </div>
              <h2 className="text-3xl font-extrabold">Visión a futuro</h2>
            </div>

            <div className="bg-brand-pink/10 rounded-2xl p-8 md:p-12">
              <p className="text-xl leading-relaxed mb-6">
                Ser referentes <strong>visibles y legítimos</strong> en la academia, la práctica y la política pública
                en Colombia y Latinoamérica por la calidad, el rigor y el compromiso con la equidad.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {visionAreas.map((area, index) => (
                  <div key={area.title} className="text-center">
                    <div className={`w-16 h-16 ${brandTiles[index]} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <area.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold mb-2">{area.title}</h3>
                    <p className="text-sm text-brand-brown/80">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-20 bg-brand-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Nuestro alcance
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Trabajamos con un enfoque regional, conectando investigadores y experiencias
              en Colombia y toda Latinoamérica
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8">
                <h3 className="font-display text-3xl mb-4">Colombia</h3>
                <p className="text-brand-brown/80">
                  Base principal de nuestras investigaciones, con enfoque en contextos territoriales
                  diversos y realidades locales específicas.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8">
                <h3 className="font-display text-3xl mb-4">Latinoamérica</h3>
                <p className="text-brand-brown/80">
                  Red de colaboración regional para intercambiar experiencias, metodologías
                  y generar conocimiento conjunto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
